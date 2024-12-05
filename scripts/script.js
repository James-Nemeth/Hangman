import getUsername from "./modules/index.js";
import setUsername from "./modules/username.js";

if (document.body.contains(document.getElementById("usernameForm"))) {
    getUsername();
}

if (document.body.contains(document.getElementById("welcomeUser"))) {
    setUsername();
}
