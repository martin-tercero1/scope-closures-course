// Each function has its own scope
function greeting() {
    let username = 'Ana';
    console.log(username);

    if (username === 'Ana') {
        console.log(`Hello ${username}!`) 
        // Here we can access username because the block is part of the function
    }
}

greeting();
console.log(username) // throws an error because we cant access the variable