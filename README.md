# Web based version of the game Hangman.

## Requirements / Purpose

- MVP:
- A game should start with a word being randomly selected.
- A representation of the word made up of underscore (_) characters should display on the screen.
- Create a user interface made up of buttons representing all 26 letters of the alphabet.
- Clicking a button should register its letter as a 'guess'
- If the letter clicked is in the word, each underscore corresponding to that letter is replaced with that letter.
- If the letter is not in the word, an additional element to the hangman diagram should be added.
- The game should keep track of which letters have been 'guessed' already.
- The game should provide a win or loss message depending on the outcome
- There should be some functionality to play again.
---

## Purpose of project: 
Nology project, using Javascript concepts that weve learnt thus far. 
Using JavaScript, SCSS/Sass, HTML.
  
---

## Build Steps

-  Made html page with basic styling
-  Worked on the landing page, global styling for buttons, colors and fonts
-  Used JS to transfer the players username to the game.html
-  Programmed buttons to be created when the page loads
-  Made the JSON words to be randomised and become '_'
-  Added logic for the gameplay(guessing, win, lose, play again)
-  Finished styling and worked on media queries

---

## Design Goals / Approach

- Aimed to do a pretty simple design but clean design.
- To somewhat feel like a proper game
- Wanted it to look and work just as well on any device.

---

## Features

- Letters buttons are greyed out on the keyboard once clicked, so it's clear which letters are still available to guess
- Image for the hangman changes each time you guess a letter incorrectly
- Play Again button available at the end of each game

---

## Known issues

-   N/A

---

## Future Goals

- Input via user keyboard
  
---

## Change logs

- N/A

---

## What did you struggle with?

- Transfering the players username, didn't know about localStorage beforehand
- Assigning a correctly guessed letter the the corresponding display box was a bit of a challenge, but once that was out of the way things became easier

---


## Further details, related projects, reimplementations

-  N/A
