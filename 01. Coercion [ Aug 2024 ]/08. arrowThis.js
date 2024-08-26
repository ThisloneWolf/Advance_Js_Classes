

let user = { 

    updateEmail: email => { 
            this.email = email;
   }


}

user.updateEmail("xyz@gmail.com");

console.log(user.email);



let obj = { 
    user: 'Sham',
    getName: function( ) { console.log (this.user) } 
}

const getData = obj.getName;
getData( ); // FUNCTION INVOCATION ----> THIS --- WINDOW