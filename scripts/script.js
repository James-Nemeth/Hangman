import { getUsername }  from "./modules/username.js";
import { setUsername } from "./modules/username.js";
import { createEl } from "./modules/DOM/dom.js";
import words from "../words/example-words.json" with { type: "json" };

if (document.body.contains(document.getElementById("usernameForm"))) {
    getUsername();
}
if (document.body.contains(document.getElementById("welcomeUser"))) {
    setUsername();
}

// Gets the word_container element
const wordContainer = document.querySelector(".word_container");

if (Array.isArray(words)) {
    // Choose a random word from the JSON array
    const randomWord = words[Math.floor(Math.random() * words.length)];

    // Returns the word but made of underscores
    const underscoredWord = " _ ".repeat(randomWord.length);

    // Creats a p element with underscores in the word_container parent
    createEl("p", underscoredWord, wordContainer, "random-word");
} else {
    console.error("Expected an array of words, but got:", words);
}

// Create Buttons on game scene after player presses start game
const btnContainer = document.querySelector(".btn-container");
for (let i = 0; i < 26; i++) {
    const letter = String.fromCharCode(65 + i); 
    createEl("button", letter, btnContainer, "btn");
}


