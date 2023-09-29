// console.log('Nichole', 37)

// console.log(6 + 3, 6 - 3, 6*3, 6/3)

// let fName = prompt('what is your first name?')
// let lName = prompt('what is your last name?')

// console.log(`The users name is ${fName} ${lName}`)

let price = 10
// prompt('Enter a price.')
let result = price * 1.206
// console.log(result)


// celsius = prompt('what is the temp in C?')
// console.log(celsius * (9/5) + 32)

let num1 = 5;
let num2 = 3;
let newNum = num1

num1 = num2;
num2 = newNum

// console.log(num1)
// console.log(num2)


let weekDays = 
['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']

let userDay = ''
// do {
    // userDay = prompt('Enter a day').toLowerCase() 
// } while (!weekDays.includes(userDay))

// let nextDay = weekDays.indexOf(userDay) + 1

// console.log(weekDays[nextDay])

// let n1 = prompt('enter the first number')
// let n2 = prompt('enter the second number')

// if (n1 === n2) {
//     console.log('they match!')
// } else {
//     (n1 > n2) ? console.log('the first number is larger') :
//     console.log('the second number is greater')
// }


// month number

// let monthNum = 0;

// do {
//     monthNum = Number(prompt('enter a number between 1 and 12'))
// } while (monthNum < 1 || monthNum > 12)

// switch (monthNum) {
//     case 2:
//         console.log(`Month ${monthNum} in the year has 28 days`)
//         break;
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         console.log(`Month ${monthNum} in the year has 31 days`)
//         break;
//     default:
//         console.log(`Month ${monthNum} in the year has 30 days`)
// }


// let hour = (+prompt('enter an hour between 0 and 23'))
// let minute = (+prompt('enter an minute between 0 and 59'))
// let second = (+prompt('enter an second between 0 and 59')) + 1

// if (second === 60) {
//     second = 0
//     minute++
//     if (minute === 60) {
//         minute = 0
//         hour ++
//         if (hour === 24) {
//             hour = 0
//             // minute = 0
//             // second = 0
//         }
//     }
// }

// console.log(`${hour}h${minute}m${second}s`)


function sayHello(firstName, lastName) {
    const message = `Hello, ${firstName} ${lastName}`
    return message
}

// let firstName = prompt('enter first name')
// let lastName = prompt('enter last name')

// console.log(sayHello(firstName, lastName))

function square1(x) {
    return Math.pow(x,2) 
}

const square2 = x => x**2

// console.log(square1(0));
// console.log(square1(2));
// console.log(square1(5));
// console.log(square2(0));
// console.log(square2(2));
// console.log(square2(5));

function square1() {
    for (let i = 0; i <= 10; i++) {
        // console.log(Math.pow(i,2))
    }
}
square1(2)

function square1(x) {
    while (x <= 10) {
        // console.log(Math.pow(x,2))
        x++
    }
}
square1(2)


const min = (num1, num2) => {
    if (num1 < num2 || num1 === num2) {
        return num1;
    } else {
        return num2
    }
}

// console.log(min(4.5, 5))

// Calculator

function calculate (num1, oper, num2) {
    switch (oper) {
        case '+':
            return num1 + num2;
            break;
        case '-':
            return num1 - num2;
            break;
        case '*':
            return num1 * num2;
            break;
        case '/':
            return num1 / num2;
            break;

    }
}

// console.log(calculate(4, '+', 6))
// console.log(calculate(4, '-', 6))
// console.log(calculate(4, '*', 6))
// console.log(calculate(4, '/', 6))

// Circumference and area

// console.log(2 ** 3);
// console.log(3 ** 2);

// circ = 2pi(r)
// area = pi(r)^2

const circ = radius => 2 * Math.PI * radius
const area = radius => Math.PI * (radius ** 2)

let radius = 1;

// console.log(`the area of a circle with radius ${radius} is ${area(radius)} and the circumference is ${circ(radius)}`)
