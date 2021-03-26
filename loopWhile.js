//while loop
// need to print 1....10

let i = 1;  //declare the variable
while(i<=10)
{
    console.log(i);
    i++;    //or i=i+1 or i+=1
}
//loop will start with row4 then then it will check the condition at row5, then it will print as
//per throw7, then it will go to row8 and add 1, then go to row5 check the conditio and loop
//will repeat continue till i = 10, it will break once i = 11
//If we do not row8 increase or decrease the value of i it will go into the infinte loop and it
//print 1 for infinite time we can stop by ctrl +c

console.log('---------------------------------');

//even number between 1 to 10
let a = 2;
while (a<=10)
{
    console.log(a);
    a+=2;
}

console.log('---------------------------------');

//write numbers in descending order from 10 to 1

let b = 10;
while (b>0) {
    console.log(b);
    b=b-1;
}

console.log('++++++++++++++++++++++++++++++++++++++++++++++');

//do while loop, in this first time the conditions are not checked so
//statement will be executed at least once

let c = 1;  //if we keep the value of c greater then 10 then we can see the execution
            //of statement without checking the condition
do {
    console.log(c);
    c++;
} while (c<=10)

console.log('---------------------------------');

//write numbers in descending order from 10 to 1
let d = 10;
do {
    console.log(d);
    d=d-1;
} while (d>0);




