import { getUsername } from "./modules/username.js";
import { setUsername } from "./modules/username.js";
import { createEl } from "./modules/DOM/dom.js";
import words from "../words/example-words.json" with { type: "json" };

// Username setup
if (document.body.contains(document.getElementById("usernameForm"))) {
    getUsername();
}
if (document.body.contains(document.getElementById("welcomeUser"))) {
    setUsername();
}

// Gameplay
// Select elements for the DOM
const wordContainer = document.querySelector(".word_container"); 
const btnContainer = document.querySelector(".btn-container"); 
const imgContainer = document.querySelector(".img_container img"); 

// Game variables
let randomWord = ""; 
let displayWord = ""; 
let incorrectGuesses = 0; 
const maxGuesses = 10; 

function initGame() {
    // select a random word from the array and make it lowercase
    randomWord = words[Math.floor(Math.random() * words.length)].toLowerCase();

    // makes a word of underscores the same length as the actual word
    displayWord = "_".repeat(randomWord.length);

    // clear the container, then display the underscore word
    wordContainer.innerHTML = ""; 
    createEl("p", displayWord.split("").join(" "), wordContainer, "random-word");

    // resest game to the beginning, first guess/image
    imgContainer.src = `./assests/img/h-0.jpg`;
    incorrectGuesses = 0;

    // reset the buttons
    btnContainer.innerHTML = ""; 
    // generate buttons from a - z
    for (let i = 0; i < 26; i++) {
        const letter = String.fromCharCode(97 + i); // Get the ASCII code
        const button = document.createElement("button"); // Create button
        button.textContent = letter; // Set the button text to the letter
        button.classList.add("btn"); // Add a class name for styling
        button.addEventListener("click", () => handleGuess(letter, button)); // Add a click event t
        btnContainer.appendChild(button); // Make the button a child of the btnContainer var
    }
}

function handleGuess(letter, button) {
    // disable the clicked button 
    button.disabled = true;
    button.classList.add("disabled-btn");

    // check if the letter guessed matches the random word
    if (randomWord.includes(letter)) {
        // add the letter to the random word to be displayed
        const newDisplayWord = displayWord
            .split("")
            .map((char, index) => (randomWord[index] === letter ? letter : char))
            .join("");
        displayWord = newDisplayWord;

        // display on the DOM
        document.getElementById("random-word").textContent = displayWord.split("").join(" ");

        // checking if all letters have been guessed correctly
        if (!displayWord.includes("_")) {
            endGame(true); // player wins
        }
    } else {
        // if incorrect, add to the counter and change the image
        incorrectGuesses++;
        imgContainer.src = `./assests/img/h-${incorrectGuesses}.jpg`;

        // checks if the counter is the same as the maximum guesses
        if (incorrectGuesses === maxGuesses) {
            endGame(false); // player loses
        }
    }
}

function endGame(result) {
    // gets rid of the displayed word
    wordContainer.innerHTML = ""; 
    // conditional statement, depening if endGame is true or false
    const message = result
        ? "Congratulations! You guessed the word!" 
        : `You lost! The word was: ${randomWord}`; 
    // creates a message to display the players win/lose
    createEl("h1", message, wordContainer, "end-message");

    // creates a button that says play again
    const playAgainBtn = document.createElement("button");
    playAgainBtn.textContent = "Play Again?"; 
    playAgainBtn.classList.add("green_btn"); 
    playAgainBtn.addEventListener("click", initGame); // used to restart the game by called the initGame function again
    wordContainer.appendChild(playAgainBtn); 
}

// Start the game when the script is loaded
initGame();




