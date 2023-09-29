function camelize(str) {
    let newString = str.split('-')
    newString = newString.map(
        function(word, index) {
            if (index == 0) {
                return word.toLowerCase()
            } else {
                return word[0].toUpperCase() + word.slice(1).toLowerCase()
            }
        }
    )
    newString = newString.join('')
    return newString
}

// console.log(camelize('This-Word-is-LONG'))

let arr = [5, 3, 8, 1]

function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item && item <= b))
}

let filtered = filterRange(arr, 1, 4);

// console.log(filtered)
// console.log(arr)

let arr2 = [5, 2, 3, 4, 6, 8, 1, 0];

function filterRangeInPlace(arr2, a, b) {

    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] < a || arr2[i] > b) {
            arr2.splice(i, 1)
            i--
        }
    }
}

filterRangeInPlace(arr2, 3, 6);

// console.log( arr2 )

arr2.sort((a, b) => b-a)

// console.log(arr2)

let arr3 = ["HTML", "JavaScript", "CSS"];

function copySorted(arr3) {
    return arr3.slice().sort()
}

let sorted = copySorted(arr3)

// console.log(sorted)
// console.log(arr3)

// Create an extendable calculator
// Create a constructor function Calculator that creates “extendable” calculator objects.

let calc = new Calculator;

console.log(calc.calculate("3 + 7"));

function Calculator() {

    this.methods = {
        '+': (a, b) => a +b,
        '-': (a, b) => a - b,
        '/': (a, b) => a / b
    }

    this.calculate = function(str) {
        let splitString = str.split(' '),
            a = +splitString[0],
            op = splitString[1],
            b = +splitString[2];

            if (isNaN(a) || isNaN(b)) {
                return NaN
            }
            return this.methods[op](a,b);
    }
    this.addMethod = function(name, func) {
        this.methods[name] = func;
    }
}

let powerCalc = new Calculator;
powerCalc.addMethod('*', (a,b) => a * b);
powerCalc.addMethod('/', (a, b) => a / b);
powerCalc.addMethod('**', (a, b) => a ** b);

let results = powerCalc.calculate('2 ** 3')
// console.log(results)
// console.log(powerCalc.methods)

// Map to names

let john2 = { name: "John", age: 25 };
let pete2 = { name: "Pete", age: 30 };
let mary2 = { name: "Mary", age: 28 };

let users2 = [ john2, pete2, mary2 ];

// let names = users.map(item => item.name)


// console.log( names ); // John, Pete, Mary

// Map to objects

let john3 = { name: "John", surname: "Smith", id: 1 };
let pete3 = { name: "Pete", surname: "Hunt", id: 2 };
let mary3 = { name: "Mary", surname: "Key", id: 3 };

let users = [ john3, pete3, mary3 ];

let usersMapped = users.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
}))

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

// console.log( usersMapped[0].id ) // 1
// console.log( usersMapped[0].fullName ) // John Smith

// Sort users by age

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr4 = [ pete, john, mary ];

function sortByAge(arr4) {
    arr4.sort((a,b) => a.age - b.age)
}

sortByAge(arr4)

// // now: [john, mary, pete]
// console.log(arr4[0].name); // John
// console.log(arr4[1].name); // Mary
// console.log(arr4[2].name); // Pete

// Shuffle an array
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  
  let arr6 = [1, 2, 3];
  shuffle(arr6);
//   console.log(arr6);


// Get average age
// Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.

let john4 = { name: "John", age: 25 };
let pete4 = { name: "Pete", age: 30 };
let mary4 = { name: "Mary", age: 29 };

let array = [ john4, pete4, mary4 ];

function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age,0)
    / users.length
}

// Filter unique array members

// Let arr be an array.

// Create a function unique(arr) that should return an array with unique items of arr.

function unique(arr6) {
  let result = []

  for ( let str of arr6) {
    if (!result.includes(str)) {
        result.push(str);
    }
  }
  return result;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

// console.log( unique(strings) ); // Hare, Krishna, :-O

// Create keyed object from array

// Let’s say we received an array of users in the form {id:..., name:..., age:... }.

// Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.

let users3 = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];
  
  let usersById = groupById(users3);
  
  function groupById(array0) {
    return array0.reduce((obj, value) => {
        obj[value.id] = value
        return obj
    }, {})
  }

  console.log(usersById)

  function groupById2(arr) {
    let result = {}
    arr.forEach((item) => result[item.id] = item)
    return result;
  }

  console.log(usersById)