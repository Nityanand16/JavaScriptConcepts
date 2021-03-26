//value types
//number, string, boolean, undefined, symbol, null

//values are copied by there values not by there references

let a = 10;
b = a;
a = 20;

console.log(a); //20
console.log(b); //10

//reference types
//object, functions, array

//objects are copied by there references not by there values

let x = {value : 10};
let y = x;
x.value = 20;

console.log(x.value); //20
console.log(y.value); //20
