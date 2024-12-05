function getUsername() {
    document.getElementById("usernameForm").addEventListener("submit", function(event) {
        event.preventDefault(); 
        const username = document.getElementById("username").value;
        localStorage.setItem("username", username);
        window.location.href = "game.html";
    });
}

export default getUsername