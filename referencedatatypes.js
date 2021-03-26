//reference type1 objects

let user ={
  name: "Rock",
  age: 34

};
//object->user, property of object is name and age
console.log(user);

//different way to read the property of the object

//1. dot notation
console.log(user.name); //object name.property name
console.log(user.age);
user.age = 35;  //property age can be updated with dot notation
console.log(user.age);
console.log(user.name + ' ' + user.age);

//2. bracket notation
user['name'] = 'Ronald';  //propery name can be updated with bracket notation
console.log(user.name);

//reference type2 array
//array is a list of objects and dynamic in nature

let name=['nitya', 'ram'];

console.log(name);
console.log(name[0]);
console.log(name.length);

name[2]='krishna';
console.log(name);
console.log(name.length);

console.log(name[1]);
console.log(name[3]); //udefined
console.log(typeof(name));  //object

//reference type3 function
//in function we don't use ; as we use ; in statements

function getName(){
    console.log('This a a function without parameters') //0 param

}
//call the function

getName();

//paramaterized based functions, param based functions

function greet(name, age){
    console.log('hello ' + name + ' ' + age)

}

greet('nitya', 36);
//function expects two parameters but we can pass one or none also
//parameters which not passed displayed as undefined
greet('nitya');
greet();

//return from functions example1
function add(num1, num2){
    return num1 + num2;

}
let sum = add(10,20);
console.log(sum);
//or
console.log(add(40,50));

//return from functions example2

function squareroot(num){
  let root = num * num;
  return root

}

console.log(squareroot(4));





