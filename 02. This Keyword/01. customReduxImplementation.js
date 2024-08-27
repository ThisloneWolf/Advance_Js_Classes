/**
 * Custom Redux Implementation
 */

// STORE

function createStore(reducer) {
    let state = [];
    let listeners = [];
  
    const getState = () => state;
  
    const dispatch = (action) => {
      state = reducer(state, action);
      listeners.forEach((listner) => listner());
    };
  
    const subscribe = (listener) => {
      listeners.push(listener);
  
      return () => {
        listeners = listeners.filter((li) => li !== listener);
      };
    };
  
    return { getState, dispatch, subscribe };
  }
  
  // REDUCER
  
  function counterReducer(state = 0, action) {
    switch (action.type) {
      case 'INCREMENT':
        return +state + 1;
  
      case 'DECREMENT':
        return +state - 1;
  
      default:
        return state;
    }
  }
  
  //  Using the Store
  
  const store = createStore(counterReducer);
  
  console.log(store);
  
  const unsubscribe = store.subscribe(() => {
    console.log('State has been Changed: ', store.getState());
  });
  
  store.dispatch({ type: 'INCREMENT' });
  store.dispatch({ type: 'INCREMENT' });
  store.dispatch({ type: 'INCREMENT' });
  
  // unsubscribe();
  
  function combineReducers(reducers) {
    return function (state = {}, action) {
      return Object.keys(reducers).reduce((nextState, key) => {
        nextState[key] = reducers[key](state[key], action);
        return nextState;
      }, {});
    };
  }
  
  const rootReducer = combineReducers({
    count: counterReducer,
    // other reducers can go here
  });
  
  const storeWithRootReducer = createStore(rootReducer);
  
  function applyMiddleware(store, middlewares) {
    middlewares = [...middlewares];
  
    let dispatch = store.dispatch;
  
    middlewares.reverse().forEach((middleware) => {
      dispatch = middleware(store)(dispatch);
    });
  
    return {
      ...store,
      dispatch,
    };
  }
  
  const loggerMiddleware = (store) => (next) => (action) => {
    console.log('dispatching', action);
    let result = next(action);
    console.log('next state', store.getState());
    return result;
  };
  
  const storeWithMiddleware = applyMiddleware(createStore(counterReducer), [
    loggerMiddleware,
  ]);
  
  storeWithMiddleware.dispatch({ type: 'INCREMENT' });
  
  /**
   *
   * COMPOSE
   */
  
  // Step 1: Define the individual functions
  const add20 = (x) => x + 20;
  const multiply30 = (x) => x * 30;
  const divide10 = (x) => x / 10;
  const subtract10 = (x) => x - 10;
  
  // Step 2: Implement the compose function (polyfill)
  function compose(...funcs) {
    if (funcs.length === 0) {
      return (arg) => arg;
    }
  
    if (funcs.length === 1) {
      return funcs[0];
    }
  
    return funcs.reduce(
      (a, b) =>
        (...args) =>
          a(b(...args))
    );
  }
  
  // Step 3: Combine the functions using compose and apply to the initial value
  const simplify = compose(subtract10, divide10, multiply30, add20);
  
  const result = simplify(100); // Start with 100
  console.log(result); // Output the result
  