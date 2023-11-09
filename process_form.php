<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Set the recipient email address
    $to = "johnwanamaker72@gmail.com";

    // Set the subject of the email
    $subject = "New Contact Form Submission from $name";

    // Compose the email message
    $message_body = "Name: $name\n";
    $message_body .= "Email: $email\n";
    $message_body .= "Message:\n$message";

    // Set the headers for the email
    $headers = "From: $email";

    // Send the email
    mail($to, $subject, $message_body, $headers);

    // Redirect to a thank-you page after sending the email
    header("Location: thank_you.html");
}
?>