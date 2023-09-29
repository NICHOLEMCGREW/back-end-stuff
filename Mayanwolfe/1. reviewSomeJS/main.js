// 1. Create a carousel

// let turns = prompt('How many turns should we do?', 0)

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is even`)
    } else {
        console.log(`${i} is odd`)
    }
}

for (let i = 1; i <= 10; i++) {
i % 2 == 0 ? console.log(`${i} is even`) : console.log(`${i} is odd`)
}

// 2. Parity show numbers divisable by 2 and then replace intital number 1 by a user prompt

// let userNum = prompt('enter a number', 1)

// for (let i = userNum; i <= (+userNum) + 9; i++) {
//     if (i % 2 === 0) {
//         console.log(`${i} is even`)
//     } else {
//         console.log(`${i} is odd`)
//     }
// }

/*3. input validation
ask user for a number until it is less than or equal to 100
and then between 50 and 100*/


let userGuess = 101;

// while(userGuess > 100 || userGuess < 50) {
//     userGuess = prompt('Enter an integer.', 0)
// }
console.log(userGuess)

// 4. Multiplcation Table and then only accepts numbers between 2 and 9

// let number = prompt('What times table do you want?', 0)

// let userInput = 0;

// while (userInput < 2 || userInput > 9) {
//     // userInput = prompt('Enter an integer', 0)
// }
// for (let i = 1; i <= 10; i++) {
//     let times = userInput * 1
//     console.log(`${userInput} * ${i} = ${times}`)
// }

// 5. Neither Yes nor No

let userWord = ''

// while (userWord !== 'yes' && userWord !== 'no') {
//     userWord = prompt('Enter a word?');
// }

// Fizzbuzz

for (let i = 1; i <= 5; i++) {
    if (i % 15 === 0) {
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz')
    } else {
        console.log(i)
    }
}


// Extra stuff
// Shortening conditional statements - let's revisit some of the previous statements 

let word = 'hello'

word == 'hello' ? console.log('hello to you too') : console.log("I don't know")

// if (word == 'hello') {
//     console.log('hello to you too')
// } else {
//     console.log("I don't know")
// }

// Truthy and Falsey

let word2 = -0

if (word2) {
    console.log('hey, there is somethign there')
} else {
    console.log("I got nothing")
}


// Can you make FizzBuzz more dry 

for (let i = 1; i <= 5; i++) {
    i % 15 === 0 ? console.log('FizzBuzz') || i % 3 === 0 ? console.log('Fizz') || i % 5 === 0 ? console.log('Buzz') : console.log(i)
}