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
*/

// Functions Accepting Callback Functions
const oneWord = function (str) {
  return str.replaceAll(' ', '').toLocaleLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best', upperFirstWord);
transformer('JavaScript is the best', oneWord);

// JS uses
const high5 = function () {
  console.log('👋');
};

document.body.addEventListener('click', high5);
['Emmanuel', 'Eve', 'Adam'].forEach(high5);
