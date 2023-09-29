let user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';

delete user.name

// console.log(user)

// 2. Check for emptieness

let schedule = {};

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

// console.log(isEmpty(schedule));

schedule["8:30"] = "get up";
schedule.name = 'school'

// console.log(isEmpty(schedule));

// console.log(Object.keys(schedule))

let salaries = {
    John: 100,
    Ann: 160, 
    Pete: 130
}

let sum = 0;

for (let key in salaries) {
    sum += salaries[key]
}

// console.log(sum)

// Multiply numeric property values by 2

// let menu = {
//     width: 200, 
//     height: 300, 
//     title: "My menu"
// };

// function multiplyNumeric(obj) {
//     for (let key in obj) {
//         if (typeof obj[key] == 'number') {

//             obj[key] *= 2
//         }
//     }
// }

// multiplyNumeric(menu)
// console.log(menu)


// let user = makeUser();

// console.log(makeUser().name);

// function makeUser() {
//     return {
//         name: "John",
//         ref() {
//             return this;
//         }
//     };
// }

// let calculator = {
//     read() {
//         this.numa = +prompt('Enter the first number', 0)
//         this.numb = +prompt('Enter the second number', 0)
//     },
//     sum() {
//         return this.numa + this.numb
//     },

//     mul() {
//         return this.numa * this.numb
//     },
// };

// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());

// Chaining
// importance: 2
// There’s a ladder object that allows to go up and down:

// let ladder = {
//     step: 0,
//     up() {
//       this.step++;
//       return this;
//     },
//     down() {
//       this.step--;
//       return this;

//     },
//     showStep: function() { // shows the current step
//       console.log(( this.step ));
//       return this;
//     }
//   };

//   ladder.up().up().down().showStep().down().showStep();


//     ladder.up();
//     ladder.up();
//     ladder.down();
//     ladder.showStep(); // 1
//     ladder.down();
//     ladder.showStep(); // 0

    // Constructor, operator "new"

    // function BigUser() {

    //     this.name = "John";
      
    //     return { name: "Godzilla" };  // <-- returns this object
    //   }
      
    //   console.log( new BigUser().name );  // Godzilla, got that object
      
    //   console.log((user.name)); // Jack
//     //   console.log((user.isAdmin)); // false
//       let obj = {}

//     function A() {
//         // this.item1 = 'stuff'
//         return obj
//      }
//     function B() {
//         // this.item1 = 'stuff'
//         return obj;
//     }

// let a = new A();
// let b = new B();

// console.log( a == b );

// Create new Calculator

// function Calculator() {
    
//     this.read = function() {
//         this.numa = +prompt('provide first number', 0)
//         this.numb = +prompt('provide second number', 0)
//     }

//     this.sum = function() {
//         return this.numa + this.numb
//     }

//     this.mul = function() {
//         return this.numa * this.numb
//     }
// }

// let calculator = new Calculator();
// calculator.read();

// console.log( "Sum=" + calculator.sum() );
// console.log( "Mul=" + calculator.mul() );


// Create new Accumulator

// let accumulator = new Accumulator(1); // initial value 1

// function Accumulator(startingValue) {
//     this.value = startingValue

//     this.read = function() {
//         this.value += +prompt('Enter a number to add', 0)
//     }
// }

// accumulator.read(); // adds the user-entered value
// accumulator.read(); // adds the user-entered value

// console.log(accumulator.value); // shows the sum of these values