// favoriteNumber.js

// Declare a variable for the favorite number
const favNumber = 16; 
let userGuess;

// Use a while loop to prompt the user for their guess
while (true) {
    userGuess = parseInt(prompt("Guess your favorite number:")); 

    if (userGuess === favNumber) {
        console.log("Correct! You've guessed your favorite number.");
        break; // Exit the loop if the guess is correct
    } else if (userGuess < favNumber) {
        console.log("Too low! Try again.");
    } else {
        console.log("Too high! Try again.");
    }
}
