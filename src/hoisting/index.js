// console.log(nameOfDog);
// // If we attempt to use the value before it has been assigned
// // this is due to the hoisting concept, where JS is adding at the top of the file:
// // var nameOfDog;
// var nameOfDog = 'Elmo';
// console.log(nameOfDog);

nameOfDog();
function nameOfDog() {
    console.log(`The best dog is ${elmo}`)
}
// Again, JS is adding var elmo; at the top, and since that does not
// have an assigned value, is going to be undefined
var elmo = 'Elmito'

// This "elevation" of the variables and functions, helps have access 
// to them during the program, but it comes with different disadvantages