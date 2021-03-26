//for loop

//print the numbers from 1 to 10

for (let i =1; i <=10; i++){
    console.log(i);
}

console.log('---------------------------------');

//print the even numbers in between 1 to 10

for (let a = 2; a <=10; a++){
    console.log(a);
}

console.log('---------------------------------');

for (let b = 1; b <=10; b++){
    console.log(b);
    if(b%2===0){
        console.log('Its a even number');
    }
}

console.log('---------------------------------');

//for in loop
//object, it fetch the values from an object

let person = {
    name : 'nitya',
    age : 34
};
for (let key in person){
    //console.log(key);   //it will only print the name, age
    //console.log(key, person.key); //key means one pair/parameter so we can't use dot notation here
    console.log(key, person[key]);
};

console.log('---------------------------------');
 
//array

const fruits = ['apple', 'orange', 'kiwi']

for (let index in fruits){
    //console.log(key, fruits.key); //key means one pair/parameter so we can't use dot notation here
    console.log(index, fruits[index]);
};

console.log('---------------------------------');

//for of, is used to get the values from array

for (let fr of fruits){
    //console.log(key, fruits.key); //key means one pair/parameter so we can't use dot notation here
    console.log(fr);
};



