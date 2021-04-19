class school {
  static boy = 10;
  girl = 20;

  static m1() {
    console.log("Hi, I am m1 a static method");
  }

  m2() {
    console.log("Hi, I am m2 non static method");
  }
}
//We can directly access Static Variables and Methods using class name
console.log(school.boy);
school.boy=100; //modified the value of variable
console.log(school.boy)
console.log(school.girl); //Undefined

school.m1();
//school.m2();//error

//We can access non Static Variables and Methods using object
let schoolObj = new school();
console.log(schoolObj.girl);
schoolObj.m2();
