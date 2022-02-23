const randomNumber = Math.floor(Math.random() * 10);
const guessNumber = prompt("Guess the Number: ");
if (guessNumber == randomNumber) {
    alert(`You WIN`);
} else {
    alert(`Not Matched. The Number is '${randomNumber}'.`);
}


// Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "You WIN" otherwise display a message "Not matched".