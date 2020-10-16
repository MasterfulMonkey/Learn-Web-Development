let randomNumber = Math.floor(Math.random() * 100) + 1;

let turn = 1;

// stores references to elements

const guesses = document.getElementById('guesses');
const lastResult = document.getElementById('lastResult');

const guessSubmit = document.getElementById('guessSubmit');
const guessField = document.getElementById('guessField');
    guessField.focus();

let resetButton: HTMLElement = document.createElement('button');
    resetButton.textContent = "New game";

function resetGame(): void // restarts game and resets elements
{
    randomNumber = Math.floor(Math.random() * 100) + 1;
    turn = 1;
    guesses.textContent = lastResult.textContent = "";
        lastResult.style.backgroundColor = 'white';
    guessSubmit.disabled = guessField.disabled = false; 
        guessField.focus();
    document.getElementsByClassName('results')[0].removeChild(resetButton);
}

function endGame(): void // disables elements at end of game
{
    guessSubmit.disabled = guessField.disabled = true;

    resetButton.addEventListener('click', resetGame);
        document.getElementsByClassName('results')[0].appendChild(resetButton);
}

function addGuess(): void
{
    let guess = Number(guessField.value);
        guessField.value = ""; // clears number from guess field

    if(guesses.textContent=="") // initializes guesses text
        guesses.textContent = "Previous guesses: ";

    guesses.textContent += `${guess} `; // add guess to previous guesses

    let check: string = (guess==randomNumber) ? "correct" : ( (guess>randomNumber) ? "high" : "low" ); // check if guess is low/correct/high

    turn++;

    if(check!="correct")
    {
        lastResult.style.backgroundColor = 'red';

        if(turn==11) // used all turns
        {
            lastResult.textContent = "GAME OVER";
            endGame();
        }
        else // keep going
        {
            lastResult.textContent = "Wrong! " + ((check=="low") ? "Too low!" : "Too high!");

            guessField.focus();
        }  
    }
    else
    {
        lastResult.style.backgroundColor = 'green';
        lastResult.textContent = "Correct! Congratulations, you win!";

        endGame();
    }
}

guessSubmit.addEventListener('click', addGuess); // get guess from guessField
guessField.addEventListener('keydown', function() {
    if(event.key=="Enter" && guessField.value!="")
        addGuess();
});