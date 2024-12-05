function setUsername () {
    const username = localStorage.getItem("username");

    if (username) {
        document.getElementById("welcomeUser").textContent = `Good luck, ${username}!`;
    } else {
        window.location.href = "index.html";
    }
}
    
export default setUsername