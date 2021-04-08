class A {
  a = 100;
  display() {
    //console.log(a)    //it is not able to use the value of a as it is a class veriable
    console.log(this.a); //we need to use this keyword if we want to use the value of class veriable
  }
}

class B extends A {
  //by writing extends A, class B become the child of class A
  //and inheritate the properties of class A
  b = 200;
  show() {
    console.log(this.b);
  }
}
let bObj = new B();
bObj.display();
bObj.show();

//-------------------------------------------------------------------------------------//
//Hirarachy And Overriding Concept

class Bank {
  rateOfInterest() {
    return 1;
  }
}

class HDFC extends Bank {
  rateOfInterest() {
    return 12;
  }
}

class SBI extends Bank {
  rateOfInterest() {
    return 14;
  }
}
let hdfcObj = new HDFC();
console.log(hdfcObj.rateOfInterest());

let sbiObj = new SBI();
console.log(sbiObj.rateOfInterest());

//------------------------------------------------------------------//
class Animal {
  constructor(color) {
    this.color = color;
  }
  printColor() {
    console.log(this.color);
  }
}

class Dog extends Animal {
  constructor(color, food) {
    super(color); //super keyword automatically invoke the parent class
    this.food = food;
  }
  eating() {
    console.log("Dog like to eat", this.food);
  }
  display() {
    this.printColor();
    this.eating();
  }
}
let dogObj=new Dog("White", "Bread");
dogObj.display();
//When we create the object of Dog class constructor will be automatically invoked
//so we need to pass two arguments
