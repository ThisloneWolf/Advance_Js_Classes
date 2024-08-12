const obj = {
    name: 'Shivam DON',
    [Symbol.toPrimitive] : function(hint) {
        console.log(hint);

        if (hint === "number") return 92
        if (hint === "string") return 120

        return 120
    },

    valueOf () {
        return 100;
    }


}

console.log(obj - 100)