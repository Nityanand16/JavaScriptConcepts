// //Example 1 without prototype
// function Car()
// {
//   this.brand="BMW";
//   this.color="Black";
// }
// car1Obj=new Car();
// car1Obj.price=500000;
// console.log(car1Obj.brand, car1Obj.color, car1Obj.price); //BMW Black 500000

// car2Obj = new Car();
// console.log(car2Obj.brand, car2Obj.color, car2Obj.price); //BMW Black Undefiend
// //car1Obj and car2Obj is an object reference variable of the function Car

// //-----------------------------------------------------------------------------
// //Example 2 add a new property to the function through prototype

// function Car() {
//   this.brand = "BMW";
//   this.color = "Black";
// }
// Car.prototype.price = 500000;
// car1Obj = new Car();
// console.log(car1Obj.brand, car1Obj.color, car1Obj.price); //BMW Black 500000

// car2Obj = new Car();
// console.log(car2Obj.brand, car2Obj.color, car2Obj.price); //BMW Black 500000
// //added the new variable to the function "Car" so it will be use by all "object reference variables"

// //-----------------------------------------------------------------------------
// //Example 3 add a new property to the class through prototype

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }
// Person.prototype.salary = 50000;
// person1Obj = new Person("Nitya", 34);
// console.log(person1Obj.name, person1Obj.age, person1Obj.salary);

// person2Obj = new Person("Nand", 36);
// console.log(person2Obj.name, person2Obj.age, person2Obj.salary);

// //-----------------------------------------------------------------------------
// //Example 4 add a new function to the class through prototype

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }
// Person.prototype.salary = 50000;
// Person.prototype.display = function () {
//   console.log(this.name, this.age, this.salary);
// };
// person1Obj = new Person("Nitya", 34);
// person1Obj.display();

// person2Obj = new Person("Nand", 36);
// person2Obj.display();

//-----------------------------------------------------------------------------
//Example 5 add a new function to the class through prototype

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }
  Person.prototype.salary = 50000;
  Person.prototype.display = function Car() {
    this.brand=brand;
    this.color=color;
  };
  person1Obj = new Person("Nitya", 34);
  console.log(person1Obj.name, person1Obj.age, person1Obj.salary);
  console.log(person1Obj.display("BMW", "Black"));
  
  person2Obj = new Person("Nand", 36);
  console.log(person2Obj.name, person2Obj.age, person2Obj.salary);
  console.log(person2Obj.display("Mercedies", "Blue"));
  
//-----------------------------------------------------------------------------
// //Example 1 without prototype
// function Car(brand, color) {
//   this.brand = brand;
//   this.color = color;
// }
// car1Obj = new Car("BMW", "Black");
// car1Obj.price = 500000;
// console.log(car1Obj.brand, car1Obj.color, car1Obj.price); //BMW Black 500000

// car2Obj = new Car("Mercedies", "Blue");
// console.log(car2Obj.brand, car2Obj.color, car2Obj.price); //Mercedies Blue Undefiend

//-------------------------------------------------------------------------------------
