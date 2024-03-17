// this is not allowed in strict mode
pi = 3.1416; // Due to hoisting, JS added the line var pi;
console.log(pi);

function myFunction() {
    // It could be used here
    'use strict'
    return piValue = 3.1416
}

console.log(myFunction());