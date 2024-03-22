// script.js
const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const guess = parseInt(document.getElementById('guessInput').value);
    attempts++;

    if (guess === secretNumber) {
        document.getElementById('result').innerText = `Congratulations! You guessed the number in ${attempts} attempts.`;
    } else if (guess < secretNumber) {
        document.getElementById('result').innerText = 'Too low! Try again.';
    } else {
        document.getElementById('result').innerText = 'Too high! Try again.';
    }
}
