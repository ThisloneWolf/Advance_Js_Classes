class Button {
    constructor(value) {
      this.value = value;
    }
    click = ( ) => {
      console.log(this, this.value);
    }
  }
  
  
  let button = new Button("hello");
  
  setTimeout(button.click, 1000); 