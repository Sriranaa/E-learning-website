function loginSuccess() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email === "" || password === "") {
        showPopup("Please fill all fields!");
        return;
    }

    showPopup("Login Successful!");
}

function showPopup(message) {
    document.getElementById("popup-text").innerText = message;
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}