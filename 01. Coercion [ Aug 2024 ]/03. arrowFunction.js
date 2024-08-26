/**
 * Arrow Function
 * 
 * 1. Don't have their own this
 * 2. Syntax simple [ Shorthad -- One line use case]
 * 3. Dublicates paramenters are not allowed
 * 4. new !!!! [ Cant not be invoked as constructor function]   //
 * 5. apply, bind, call doesn't work here //
 * 6. Arrow function doesn't has arguments 
 */

function test() {
    console.log(arguments)
}

test(1,2)


const arr = () => {
    console.log(arguments)
}

arr(11, 23)
