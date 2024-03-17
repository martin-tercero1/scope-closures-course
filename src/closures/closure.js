function greeting() {
    let username = 'Oscar';

    function displayUsername() {
        return `Hello ${username}`;
    }

    return displayUsername;
}

// Remember this is "saving" or "remembering" the context
const g = greeting();
console.log(g); 
console.log(g()); 