import getUsername from "./modules/index.js";
import setUsername from "./modules/username.js";
import { createEl } from "./modules/DOM/dom.js";

if (document.body.contains(document.getElementById("usernameForm"))) {
    getUsername();
}
if (document.body.contains(document.getElementById("welcomeUser"))) {
    setUsername();
}

if (document.body.contains(document.querySelector(".btn-container"))) {
    const btnContainer = document.querySelector(".btn-container");
    
    for (let i = 0; i < 26; i++) {
        const letter = String.fromCharCode(65 + i); 
        createEl("button", letter, btnContainer, "btn");
    }
}


