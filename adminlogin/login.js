
/**
 * This function checks if the entered login is valid
 * and redirects them to a specified page if it is
 * 
 * Author: John Wanamaker
 * 
 */
function login() {

    //declare username and password variables
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Define admin username and password (use a secure method to store credentials)
    var adminUsername = "admin";
    var adminPassword = "password123";
    
    if (username === adminUsername && password === adminPassword) {
        // Redirect to the "Thank You" screen
        window.location.href = "thank_you.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
}