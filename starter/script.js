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
*/

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
checkIn(flight, emmanuel);
console.log(flight);
console.log(emmanuel);

// Is the same as doing...
// const flightNum = flight;
// const passenger = emmanuel

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(emmanuel);
checkIn(flight, emmanuel);
