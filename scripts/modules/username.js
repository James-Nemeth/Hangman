export function getUsername() {
    document.getElementById("usernameForm").addEventListener("submit", function(event) {
        event.preventDefault(); 

        // get the username entered by the user
        const username = document.getElementById("username").value;
        // stores the username that was inputed into local storage
        localStorage.setItem("username", username);
        window.location.href = "game.html";
    });
}


export function setUsername() {
    // gets the username that is stored in local storage
    const username = localStorage.getItem("username");

    if (username) {
        // display the username with a message
        document.getElementById("welcomeUser").textContent = `Good luck, ${username}!`;
    } else {
        // if no username, got back to index.html
        window.location.href = "index.html";
    }
}



