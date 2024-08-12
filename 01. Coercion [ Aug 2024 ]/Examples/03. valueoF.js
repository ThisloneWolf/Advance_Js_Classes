const obj = { name: "karan"}


/**
 * By default if I will call toString() on any object it will return [object Object]
 * If I will call valueOf() on any object, it will return the object itself!
 */
console.log(obj.toString(), obj.valueOf())