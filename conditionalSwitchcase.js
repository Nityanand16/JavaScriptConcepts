let role = 'nitya';

switch (role) {
    case 'admin':
        console.log('admin user');
        break;

    //or
    //case 'admin': console.log('admin user'); break;

    case 'hr':
        console.log('hr user');
        break;

    case 'sales':
        console.log('sales user');
        break;

    case 'guest':
        console.log('guest user');
        break;

    default:
        console.log('no user');
        break;
}

console.log('------------------------------------------------------------')

let marks = 94;

switch (true) {
    case marks>=75 && marks<=100:
        console.log("Student passed with Honours");
        console.log("Student is Excellent in his Studies");
        break;

    case marks>=60 && marks<=74:
        console.log("Student passed with First Division");
        console.log("Student is Good in his Studies");
        break;

    case marks>=50 && marks<=59:
        console.log('student passed with second Division', 'Student need to focus in his Studies');
        break;

    case marks>=34 && marks<=49:
        console.log('Studend passed with Third Division');
        break;

    default:
        console.log('Student failed');
        break;
}

console.log('------------------------------------------------------------')

//multiple cases
//months 1 to 12 January to December
//seasons Winter, Spring, Summer and autumn

let month = 1;

switch (month) {
    case month = 1:
    case month = 2:
    case month = 3:
        console.log('Its Winter');
        break;
    
    case month = 4:
    case month = 5:
    case month = 6:
        console.log('Its Spring');
        break;

    case month = 7:
    case month = 8:
    case month = 9:
        console.log('Its Summer');
        break;

    case month = 10:
    case month = 11:
    case month = 12:
        console.log('Its Autumn');
       break;

    default:
        console.log('Wrong Data')
        break;
}