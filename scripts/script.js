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

// Game setup
if (document.body.contains(document.querySelector(".word_container"))) {
    const wordContainer = document.querySelector(".word_container");
    const btnContainer = document.querySelector(".btn-container");
    const imgContainer = document.querySelector(".img_container img");

    let randomWord = ""; // The randomly selected word
    let displayWord = ""; // The word displayed with underscores
    let incorrectGuesses = 0; // Track incorrect guesses
    const maxGuesses = 10; // Max incorrect guesses before losing

    // Initialize the game
    function initGame() {
        // Choose a random word and convert it to lowercase
        randomWord = words[Math.floor(Math.random() * words.length)].toLowerCase();
        displayWord = "_".repeat(randomWord.length);

        // Display the word as underscores
        wordContainer.innerHTML = ""; // Clear any previous content
        createEl("p", displayWord.split("").join(" "), wordContainer, "random-word");

        // Reset image and incorrect guesses
        imgContainer.src = `./assests/img/h-0.jpg`;
        incorrectGuesses = 0;

       
        btnContainer.innerHTML = ""; 
        for (let i = 0; i < 26; i++) {
            const letter = String.fromCharCode(97 + i); 
            const button = document.createElement("button");
            button.textContent = letter;
            button.classList.add("btn");
            button.addEventListener("click", () => handleGuess(letter, button));
            btnContainer.appendChild(button);
        }
    }

    
    function handleGuess(letter, button) {
        button.disabled = true;
        button.classList.add("disabled-btn"); 

        if (randomWord.includes(letter)) {
            const newDisplayWord = displayWord
                .split("")
                .map((char, index) => (randomWord[index] === letter ? letter : char))
                .join("");
            displayWord = newDisplayWord;

            document.getElementById("random-word").textContent = displayWord.split("").join(" ");

            if (!displayWord.includes("_")) {
                endGame(true);
            }
        } else {
            incorrectGuesses++;
            imgContainer.src = `./assests/img/h-${incorrectGuesses}.jpg`;

            if (incorrectGuesses === maxGuesses) {
                endGame(false);
            }
        }
    }


    function endGame(isWin) {
        wordContainer.innerHTML = ""; 
        const message = isWin
            ? "Congratulations! You guessed the word!"
            : `You lost! The word was: ${randomWord}`;
        createEl("h1", message, wordContainer, "end-message");

        const playAgainBtn = document.createElement("button");
        playAgainBtn.textContent = "Play Again?";
        playAgainBtn.classList.add("green_btn"); 
        playAgainBtn.addEventListener("click", initGame);
        wordContainer.appendChild(playAgainBtn);
    }

    initGame();
}



