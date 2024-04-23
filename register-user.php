<?php
// Establish database connection
$conn = new mysqli("localhost", "username", "password", "database");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve form data
$username = $_POST['username'];
$email = $_POST['email'];
$password = password_hash($_POST['password'], PASSWORD_DEFAULT); // Hashing the password for security

// Insert user data into database
$sql = "INSERT INTO users (username, email, password) VALUES ('$username', '$email', '$password')";

if ($conn->query($sql) === TRUE) {
    // Redirect to finalize-registration.html upon success
    header("Location: finalize-registration.html");
    exit;
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>