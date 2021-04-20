let person={
    name : "Nityanand",
    lastname : "Gupta",
    age : 34,
    weight : "78"
}

//Accessing object properties
console.log(person["name"]);
console.log(person.lastname);

//Add new properties to the object
person["height"]=5.9;
console.log(person.height);

//Update properties of the object
person["weight"]=79;
console.log(person.weight);

//Remove/delete properties from the object
delete person["age"];
console.log(person.age);    //undefined

console.log("****************for/in loop*******************")
//for/in loop-Retrive all the properties and value of the object
for(x in person){
    //console.log(x); //print all the properties of the object
    //console.log(person.x);    //undefined
    //console.log(person[x]); //print all the values of the object
    console.log(x+"     "+person[x]);   //print all the properties and values of the object
}

console.log("***************method within the object***********************")
let employee={
    empName : "Nitya",
    empId : "N4",
    empJob : "QA",
    empSalary : 50000,
    bonous : function(){
        return (this.empSalary * 10)/100;
    }

};

console.log(employee.empName);

//console.log(employee.bonous);   //We can't invoke the method bonous like this
console.log(employee.bonous());
