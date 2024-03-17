// We have a closure if a function is accessing a variable
// that is outside of the function's context

const myGlobal = 0;

// Lexical context - How accesible are the variables inside of functions
function myFunction() {
    const myNumber = 1;
    console.log(myGlobal);

    function parent() { // internal function
     const inner = 2;
     console.log(myNumber, myGlobal);

     function child() {
        console.log(inner, myNumber, myGlobal);
        // this will depend on the lexical contexts
     }
    }
}