
var length = 10; 
// ------> window.length = 10



function fn() {
    // THIS -- WINDOW
console.log(this.length);

// WINDOW.LENGTH --- 10
}


// arguments: Array like Object 


var obj = {
  length: 5,
  method: function(fn) {

    console.log(this);

    fn(); // FUNCTION INVOCATION ----> THIS ----> WINDOW


    // [fn, 1, length: 2 ]
   arguments[0](); // METHOD INVOCATION
  }


};

obj.method(fn, 1); // METHOD INOVATION ----> THIS KEYWORD -----> obj ----> obj { length: 5, ....}


