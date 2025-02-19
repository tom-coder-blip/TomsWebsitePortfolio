let secret = Math.floor(Math.random() * 100) + 1;
let guess = parseInt(prompt("Please guess the secret number (1-100)"));

if (guess === secret) {
    alert("Correct Guess!");
} else {
    alert("Sorry, incorrect Guess!");
}


while (guess !== secret){
    if (guess < secret){
        alert("Incorrect, too low.");
    }else {
        alert("Incorrect, too high.")
    }
    guess = parseInt(prompt("Try again: [Please guess the secret number (1-100)"));
}

alert("Correct Guess!");
