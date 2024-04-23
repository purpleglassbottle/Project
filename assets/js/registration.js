function validateRegistration() {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm_password").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match. Please re-enter your password.");
        return false; // Prevent form submission
    }

    return true; // Allow form submission
}