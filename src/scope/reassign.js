// Defining
var firstName; // value is undefined

// Assigning
firstName = 'Martin';
console.log(firstName);

var lastName = 'Tercero'; // Define and assign
lastName = 'Alfaro'; // resassign
console.log(lastName);

var secondName = 'Javier'; // declare and assign
var secondName = 'Carlos'; // redeclare and reassign
console.log(secondName);

let fruit1 = 'Apple'; // declare and assign
fruit = 'Kiwi' // reassign

// let fruit1 = 'Banana'; // error, let will not allow us to redeclare

const animal = 'Dog'; // declare and assing
// animal = 'Cat' // error, const will not allow us to redeclare and reassign


// WARNING - When working with objects or arrays, they are a reference
const vehicles = [];
vehicles.push("Car");
console.log(vehicles);

vehicles.pop();
console.log(vehicles);

// we are not reassigning or redeclaring, because the value it is just a reference to the array.
// The reference is not changing.