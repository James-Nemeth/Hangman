export function setUsername () {
    const username = localStorage.getItem("username");

    if (username) {
        document.getElementById("welcomeUser").textContent = `Good luck, ${username}!`;
    } else {
        window.location.href = "index.html";
    }
}

export function getUsername() {
    document.getElementById("usernameForm").addEventListener("submit", function(event) {
        event.preventDefault(); 
        const username = document.getElementById("username").value;
        localStorage.setItem("username", username);
        window.location.href = "game.html";
    });
}

