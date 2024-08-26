/**
 * 
 * Arrow functiond doesn't have this, this ----> outer lexical enviornment ka
 * 
 */


(function test (){

    // context 
    const arr = ( ) => {
        console.log(this)
    }


    console.log(this)

    
    arr()
}).call({name: "testing"})