let cars=["Audi", "BMW", "Volkswagon", "Volvo", "Nissan"];
//or
//let cars = new Array("Audi", "BMW", "Volkswagon", "Volvo", "Nissan");

console.log(cars);

//access the value base on index
console.log(cars[1]);

//change the index value
cars[3]="Mercedes Benz"
console.log(cars);

//we can have different types of variables in the same array
let student=["Nitya", 34, 5.5, true]    //string, integer, float, boolean
console.log(student);

//JavaScript array also holds object
let car1={
    carName: "Audi",
    price: 400000
};
let car2={
    carName: "BMW",
    price: 500000
};
let vehicle=[car1, car2];

console.log(vehicle);
console.log(vehicle[1]);

console.log("*************************")

let city = ["Copenhagen", "Arhus", "Gladsaxe", "Rodovre", "Soborg"]
console.log(city.length)

// //Looping elements for array (for loop)
// for (let i = 0; i <= city.length-1; i++) {
//     console.log(city[i]);
// };

//Looping elements for array (for/of loop) this is specially designed for array
for(ele of city){
    console.log(ele);
};

//Recognize an Array-typeof
console.log(typeof(city));  //object

console.log(Array.isArray(city));   //true
