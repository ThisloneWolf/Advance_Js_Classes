let a = { name: 'karan' }
let b = 100;

console.log(a - b)

/**
 * Subtract Operation 
 * 
 */


/**
 * 
 * ToNumber(a) --- ToNumber({name: "karan"})
 * ToNumber(b) --- ToNumber(100)  ---------------------> 100
 * 
 */


/**
 *  ToPrimitve({name: "karan"}, hint: Number)
 * 
 * STEP: 1 [TRUE]
 * STEP: 2 [TRUE]
 * 
 * C: INPUT: { name: "karan"}, hint: "Number"
 * F: NOT APPLICABLE
 * 
 * 
 * NOW CALLING : OrdinaryToPrimitive({name: "karan"}, Number)
 * 
 * 1. TRUE
 * 2. [valueOf, toString]
 * 
 * 3. {name:"karan"}.valueOf() ----> OBJECT ---> RETURN ?? X
 * 
 * 4. {name: "karan"}.toStrin() ----> "[object Object]"
 *
 * 5. ToNumber("[object Object]") -----> NAN
 * 
 */