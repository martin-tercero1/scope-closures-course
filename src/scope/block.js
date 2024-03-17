// let and const were introduced in ES6, along with the block scope
// Variables defined inside of a block, can only be accessed in that block
function fruits() {
    // If we are defining something with curly brackets, but is not a function, is a block
    if (true) {
      var fruit1 = "Apple"; // function scope
      let fruit2 = "Kiwi"; // block scope
      const fruit3 = "Banana"; // block scope
      console.log(fruit2);
      console.log(fruit3);
    }

    console.log(fruit1) // we can access fruit1 because is declared using var | We should avoid that
    // console.log(fruit2); // error
    // console.log(fruit3); // error
}

fruits();