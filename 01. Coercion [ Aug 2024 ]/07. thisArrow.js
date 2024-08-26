let group = {

    title: "Our Group",
    students: ["John", "Pete", "Alice"],
  
    showList( ) {

        console.log(this);

      this.students.forEach(

        () => console.log(this)
      ); // METHOD INVOCATION ---> STUDENTS
    }
  
  };
  
  group.showList( ); // METHOD INVOCATION ------> THIS ---> GROUP OBJ