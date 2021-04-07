class student {
  constructor() {
    let name, age;
  }
  getName() {
    return this.name;
  }//it will return the value of name
  setName(name) {
    this.name=name;
  }//it will set the value of name
  getAge() {
    return this.age;
  }
  setAge(age) {
    this.age=age;
  }
}
let stu=new student();
stu.setName("Nitya");
stu.setAge(34);

console.log(stu.getName());
console.log(stu.getAge());

//this keyword representing the class