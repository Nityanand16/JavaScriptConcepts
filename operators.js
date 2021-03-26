//different types of operators
//Airthmetic
//Assignment
//Comparision
//Ternary
//Logical
//bitwise operators

//Airthmetic operators
let a = 4;
let b = 2;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a ** b);    //b is to the power of a
console.log(2 ** 2);    //2 is to the power of 2

//++ and --
let x = 2;

console.log(x++);   //2, first it x was called and then added
console.log(x); //3

let x1 = 2;
let x2 = x1++;
console.log(x1);    //3
console.log(x2);    //2

let a1 = 2;
let a2 = ++a1;
console.log(a1);    //3
console.log(a2);    //3

let c = 2;

console.log(++c);   //3, first it added then x was called
console.log(c); //3

let m = 2;

console.log(m--);   //2
console.log(m); //1

let p = 2;

console.log(--p);   //1
console.log(p); //1

console.log('--------------------------------------------------');

//Assignment operators

let g = 10;

h = g + 10;
console.log(h); //20

h = g * 10;
console.log(h);

g+= 10;
console.log(g); //20

g*= 10;
console.log(g);

console.log('--------------------------------------------------');

//Comparision operators

let k = 10;

console.log(k==10);
console.log(k<10);
console.log(k>10);
console.log(k<=10);
console.log(k>=10);

//strict equality - type and value both are checked

console.log(k===10);    //true
console.log('k'===10);  //false
console.log(10===10);   //true
console.log('10'===10); //false
console.log(true===10); //false

//loose equality - only value are checked

console.log(k == 10);    //true
console.log('k' == 10);  //false
console.log(10 == 10);   //true
console.log('10' == 10); //true
console.log(true == 1); //true

console.log('--------------------------------------------------');

//Ternary operators

let points = 110;
let type = points > 100 ? 'gold' : 'silver';

console.log(type);  //gold
// if we change the points below then 100 it will give silver

console.log('--------------------------------------------------');

//Logical operators

// And (&&) operators
//in this it needs to satisfy both the conditions

//true && true; -> true
//true && false; -> false
//false && true; -> false
//false && false; -> false

//for getting the admission in college you should learn following subjects and have
//minimum marks, if both the condition is true then only row123 will be true
let subjects = true;
let marks = true;
let admision = subjects && marks;

console.log(admision);

//or || operators
//in this it needs to satisfy only one conditions

//true && true; -> true
//true && false; -> true
//false && true; -> true
//false && false; -> false

let subject = true;
let mark = false;
let admisions = subject || mark;

console.log(admisions);

//Not (!) operators
console.log(!(10>5));   //false
console.log(!(10<5));   //true

//logical operators with non boolean;
//falsy (false) value it include
    //undefined
    //null
    //0
    //false
    //''
    //not a number

//truthy value, which are not falsy
console.log(false || 'nitya');  //nitya, first value is falsy so the output is second
console.log(true || undefined); //true, first value is not falsy so it take the first value
console.log(false || undefined); //undefined, first value was falsy so it checked the
                                //second but it is also falsy so it take the second value
console.log(0 || 1 || 2);   //1, first value is falsy so it checked the second number which is
                            //not falsy, it won't checked the third value as second value is not falsy

//example
let firstFruit = 'apple';   //change the value of firstFruit and see the effect
let secondFruit = 'orange';
let fruit = firstFruit || secondFruit;
console.log(fruit);

//bitwise operators

//1     00000001
//2     00000010
//3     00000011    when we use the '|' single pipe
//0     00000000    when we use the &

console.log(1 | 2); //3
console.log(1 & 2); //0

//operators precedence

console.log(4+5*8); //44
console.log((4+5)*8);   //72

//swap the values

let u = 10;
let v = 20;
    w = u;  //10
    u = v;  //20
    v = w;  //10
    
console.log(u); //20
console.log(v); //10


