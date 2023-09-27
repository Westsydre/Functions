'use strict';
/*
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES
  // numPassengers= numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);
createBooking('LH123', undefined, 1000);
console.log(bookings);

const flight = 'LH234';
const emmanuel = {
  name: 'Emmanuel Adebayo',
  passport: 2439479289,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 2439479289) {
    alert('Check in');
  } else {
    alert('Wrong passport');
  }
};
// checkIn(flight, emmanuel);
// console.log(flight);
// console.log(emmanuel);

// Is the same as doing...
// const flightNum = flight;
// const passenger = emmanuel

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(emmanuel);
checkIn(flight, emmanuel);

// Functions Accepting Callback Functions
const oneWord = function (str) {
  return str.replaceAll(' ', '').toLocaleLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best', upperFirstWord);
transformer('JavaScript is the best', oneWord);

// JS uses it all the time
const high5 = function () {
  console.log('👋');
};

document.body.addEventListener('click', high5);
['Emmanuel', 'Eve', 'Adam'].forEach(high5);

// Functions Returning Functions
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Emmanuel');
greeterHey('Daniel');

greet('Hello')('Emmanuel');

const greet1 = greeting => name => console.log(`${greeting} ${name}`);

const greeterHey1 = greet1('Hi');
greeterHey1('Emmanuel');
greeterHey1('Daniel');

greet1('Hi')('Emmanuel');
*/

// The Call and Apply Method

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Emmanuel Adebayo');
lufthansa.book(635, 'John Smith');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

// Call method
const book = lufthansa.book;

book.call(eurowings, 235, 'Daniel Adebayo');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');

// Apply method - Used for arrays
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);

// Using Call instead of Apply
book.call(swiss, ...flightData);

console.log(swiss);

// Bind Method

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');

// Partial application - a part of the argument/function is already applied
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Emmanuel Adebayo');
bookEW23('Martha Cooper');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));
console.log(addVAT(23));

const addT = rate => value => value + value * rate;

const addV = addT(0.23);
console.log(addV(100));
console.log(addV(23));

// Coding Challenge

/*const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: Javascript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // Get answer
    // console.log(this.options.join('\n'));
    const newQuestion = Number(
      prompt(
        `${this.question}${'\n'} ${this.options.join(
          '\n'
        )}${'\n'} (Write option number)`
      )
    );

    typeof newQuestion === 'number' &&
      newQuestion < this.answers.length &&
      this.answers[newQuestion]++;

    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
}; 
*/
// poll.registerNewAnswer();

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));
// console.log(poll.answers);

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
  // 1. Create a Method that brings up a Prompt
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    // console.log(answer);

    // 2. Register the answer variable to the answers array
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    // 5. Call the displayResults Method in the registerNewAnswer Method
    this.displayResults();
  },

  // 4. Create a displayResults method that displays the poll results
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(',')}`);
    }
  },
};
// poll.registerNewAnswer();

// 3. Call the registerNewAnswer Method using an eventListener
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));
console.log(poll.answers);

poll.displayResults.call({ answers: [5, 2, 3] });
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
