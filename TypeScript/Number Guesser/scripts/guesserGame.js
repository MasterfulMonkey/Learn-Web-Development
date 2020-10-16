"use strict";
var randomNumber = Math.floor(Math.random() * 100) + 1;
var turn = 1;
// stores references to elements
var guesses = document.getElementById('guesses');
var lastResult = document.getElementById('lastResult');
var guessSubmit = document.getElementById('guessSubmit');
var guessField = document.getElementById('guessField');
guessField.focus();
var resetButton = document.createElement('button');
resetButton.textContent = "New game";
function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    turn = 1;
    guesses.textContent = lastResult.textContent = "";
    lastResult.style.backgroundColor = 'white';
    guessSubmit.disabled = guessField.disabled = false;
    guessField.focus();
    document.getElementsByClassName('results')[0].removeChild(resetButton);
}
function endGame() {
    guessSubmit.disabled = guessField.disabled = true;
    resetButton.addEventListener('click', resetGame);
    document.getElementsByClassName('results')[0].appendChild(resetButton);
}
function addGuess() {
    var guess = Number(guessField.value);
    guessField.value = ""; // clears number from guess field
    if (guesses.textContent == "") // initializes guesses text
        guesses.textContent = "Previous guesses: ";
    guesses.textContent += guess + " "; // add guess to previous guesses
    var check = (guess == randomNumber) ? "correct" : ((guess > randomNumber) ? "high" : "low"); // check if guess is low/correct/high
    turn++;
    if (check != "correct") {
        lastResult.style.backgroundColor = 'red';
        if (turn == 11) // used all turns
         {
            lastResult.textContent = "GAME OVER";
            endGame();
        }
        else // keep going
         {
            lastResult.textContent = "Wrong! " + ((check == "low") ? "Too low!" : "Too high!");
            guessField.focus();
        }
    }
    else {
        lastResult.style.backgroundColor = 'green';
        lastResult.textContent = "Correct! Congratulations, you win!";
        endGame();
    }
}
guessSubmit.addEventListener('click', addGuess); // get guess from guessField
guessField.addEventListener('keydown', function () {
    if (event.key == "Enter" && guessField.value != "")
        addGuess();
});
