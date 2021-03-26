//break
//for loop

for (let i =1; i <=10; i++){
    if (i===5) {
        break;
    }
    
    console.log(i); //1, 2, 3, 4
}

console.log('---------------------------------');

//break
//while loop

let c = 1
while (c<=10) {
    if(c===5){
        break;
    }
    console.log(c);
    c++;
}

//continue
//for loop

for (let a =1; a <=10; a++){
    if (a===5) {
        continue;
    }
    
    console.log(a); //1, 2, 3, 4, 6, 7, 8, 9, 10
}

console.log('---------------------------------');

for (let b =1; b <=10; b++){
    if (b===3 || b===5 || b===7) {
        continue;
    }
    
    console.log(b); //1, 2, 4, 6, 8, 9, 10
}



