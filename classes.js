// class person {

//     setDetails(){
//         this.name="Nitya";
//         this.age="34";
//         this.car="BMW";
//     }
//     getDetails(){
//         console.log(this.name,this.age,this.car)
//     }
// }

// personObj=new person()
// personObj.setDetails()
// personObj.getDetails()

// //--------------------------------------------------------------
// //passing the arguments to the method
// class person {

//     setDetails(name, age, car){
//         this.name=name;
//         this.age=age;
//         this.car=car;
//     }
//     getDetails(){
//         console.log(this.name,this.age,this.car)
//     }
// }

// personObj=new person()
// personObj.setDetails("Nitya", 34, "BMW")
// personObj.getDetails()

//--------------------------------------------------------------
//use of constructor in the class
class person {

    constructor(name, age, car){
        this.name=name;
        this.age=age;
        this.car=car;
    }
    getDetails(){
        console.log(this.name,this.age,this.car)
    }
}

personObj=new person("Nitya", 34, "BMW")
personObj.getDetails()

person1Obj=new person("Nitya1", 35, "Audi")
person1Obj.getDetails()
person2Obj=new person("Nitya2", 36, "Mercedies")
person2Obj.getDetails()
person3Obj=new person("Nitya3", 37, "Volkswagon")
person3Obj.getDetails()
person4Obj=new person("Nitya4", 38, "Nissan")
person4Obj.getDetails()
//For one class we can create multiple objects.
//A class contains the method as well as constructor.
//Every objects are independent.
//When we call the method respective constructor will be invoke automatically.
