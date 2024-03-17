// variables

var a; // defining
var b = 'b'; // defining and assigning
b = 'bb' // reassigning
var a = 'aa'; // redefining

// Global scope
// Any variable that is part of the file (not part of a function or block) will become global
var fruit = 'Apple';

function bestFruit() {
    // The fruit variable is accessible because is global
    console.log(fruit);
}

bestFruit();


function countries() {
    country = 'Colombia'; // WARNING - this is being declared as global
    console.log(country);
}

countries();
console.log(country); // That is why it can be accessed here