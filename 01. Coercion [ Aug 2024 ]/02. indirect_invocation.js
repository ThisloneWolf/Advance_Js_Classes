/**
 * 
 * INDIRECT INVOCATION:  call, apply
 * 
 */

function test () {

    console.log(this)
}

// test.call({name: "karan" }, 1, 2)
// test.call({name: 'asdas',})
// test.apply({name: "test"}, [1,23])

// Bind Invocatiom  [ EDGE CASE: CONTEXT TIGHT ]

const a = test.bind({name: 'binded'})
a.apply({name: 12321})

a.call({name: "pep"})





