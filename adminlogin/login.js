function login() {
    // Define admin username and password (use a secure method to store credentials)
    var adminUsername = "admin";
    var adminPassword = "password123";

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === adminUsername && password === adminPassword) {
        // Redirect to the "Thank You" screen
        window.location.href = "thank_you.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
}