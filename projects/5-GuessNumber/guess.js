// const form = document.querySelector(".submitForm")
// let userNum = document.querySelector("#number-field")
// const submitBtn = document.querySelector('#subBtn')
// const guess = document.querySelector('.guesses')
// // CREATING A RANDOM NUMBER
// const randomnumber = parseInt(Math.trunc(Math.random() * 100))
// console.log(randomnumber);

// let previousGuess = []
// let number_of_guess = 5

// form.addEventListener('submit', (event) => {
//     event.preventDefault()
//     let userNum = parseInt(document.querySelector("#number-field").value)
//     // console.log(userNum);

//     vallidityOfNum(userNum)
   
// })

// function vallidityOfNum(userNum) {
//     if (!isNaN(userNum)) {
//         if (number_of_guess <= 0) {
//             document.querySelector('.lowOrHi').innerHTML = "Opps...no more guess"
//             endgame()
//         } else {
//             checkGreatterOrSmaller(userNum)
//             previousGuess.push(userNum)
//             number_of_guess = number_of_guess - 1
//             document.querySelector('.lastResult').innerHTML=number_of_guess
//             guess.innerHTML = previousGuess
//             document.querySelector("#number-field").value = ""
//         }

//     } else {
//         alert('pleas try again give a number')
//     }
// }

// function checkGreatterOrSmaller(userNum) {
//     if (userNum > randomnumber) {
//         document.querySelector('.lowOrHi').innerHTML = "you choosed a greatter number"
//     } else if (userNum < randomnumber) {
//         document.querySelector('.lowOrHi').innerHTML = "you choosed a lower number"
//     } else {
//         document.querySelector('.lowOrHi').innerHTML = "won the game"
//         endgame()
//     }
// }

// function endgame() {

//     userNum.setAttribute('disabled', '')
//     const resultDiv = document.querySelector('.resultParas')
//     const button = document.createElement('button')
//     button.innerHTML = "reset"
//     resultDiv.appendChild(button)
//     button.addEventListener('click',()=>{
//         location.reload()
//     })

// }



//**************OPTIMISED APPROACH*********

// Selecting the necessary elements from the DOM
const form = document.querySelector(".submitForm");
const userNumInput = document.querySelector("#number-field");
const guessDisplay = document.querySelector('.guesses');
const remainingGuessDisplay = document.querySelector('.lastResult');
const feedbackDisplay = document.querySelector('.lowOrHi');
const resultDiv = document.querySelector('.resultParas');

// Generating a random number between 0 and 100
const randomNumber = Math.trunc(Math.random() * 100);
console.log(randomNumber);

// Initializing variables for tracking guesses and previous guesses
let remainingGuesses = 5;
let previousGuesses = [];

// Adding a submit event listener to the form
form.addEventListener('submit', (event) => {
    // Preventing the default form submission behavior
    event.preventDefault();
    // Parsing the user input as an integer
    const userGuess = parseInt(userNumInput.value);
    // Validating the user input
    validateUserInput(userGuess);
});

// Function to validate the user input
function validateUserInput(userGuess) {
    if (!isNaN(userGuess)) {
        // Checking if there are remaining guesses
        if (remainingGuesses <= 0) {
            displayMessage("Oops...no more guesses");
            endGame();
        } else {
            // Checking if the user's guess is greater, smaller, or equal to the random number
            checkGuess(userGuess);
            // Updating the number of remaining guesses
            remainingGuesses--;
            remainingGuessDisplay.innerHTML = remainingGuesses;
            // Updating the list of previous guesses
            previousGuesses.push(userGuess);
            guessDisplay.innerHTML = previousGuesses.join(', ');
            // Clearing the input field
            userNumInput.value = "";
        }
    } else {
        // Alerting the user if the input is not a number
        displayMessage('Please try again and enter a valid number.');
    }
}

// Function to check if the user's guess is greater, smaller, or equal to the random number
function checkGuess(userGuess) {
    if (userGuess > randomNumber) {
        displayMessage("You chose a greater number.");
    } else if (userGuess < randomNumber) {
        displayMessage("You chose a lower number.");
    } else {
        displayMessage("Congratulations! You won the game.");
        endGame();
    }
}

// Function to display feedback messages
function displayMessage(message) {
    feedbackDisplay.innerHTML = message;
}

// Function to handle the end of the game
function endGame() {
    // Disabling the input field
    userNumInput.setAttribute('disabled', '');
    // Creating a reset button
    const resetButton = document.createElement('button');
    resetButton.innerHTML = "Reset";
    resultDiv.appendChild(resetButton);
    // Adding a click event listener to the reset button
    resetButton.addEventListener('click', () => {
        // Reloading the page to reset the game
        location.reload();
    });
}
