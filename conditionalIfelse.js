//if else
//if(condition){
//    statement1
//    statement2
//}
//else{
//    statement3
//    statement4
//}
//if we have one statement then we can write without {}

let marks = 94;
if(marks>=75 && marks<=100){
    console.log("Student passed with Honours");
    console.log("Student is Excellent in his Studies");
}

else if(marks>=60 && marks<=74){
    console.log("Student passed with First Division");
    console.log("Student is Good in his Studies");
}

else if(marks>=50 && marks<=59)
    console.log('student passed with second Division', 'Student need to focus in his Studies');

else if(marks>=34 && marks<=49)
    console.log('Studend passed with Third Division');

else
    console.log('Student failed');


