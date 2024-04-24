document.getElementById("register-form").addEventListener("submit", async function (e) {
    e.preventDefault(); // Prevent the default form submission

    // Gather form data
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const passwordConfirm = document.getElementById("password-confirm").value;

    // Validate passwords match
    if (password !== passwordConfirm) {
        const errorDiv = document.getElementById("form-error");
        errorDiv.innerText = "Passwords do not match.";
        errorDiv.style.display = "block";
        return;
    }

    // Data to be sent to the backend
    const formData = {
        username: username,
        email: email,
        password: password
    };

    // Try sending the form data to the backend
    try {
        const response = await fetch("/api/register", { // Adjust endpoint as needed
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            // Redirect upon successful registration
            window.location.href = "/finalize-registration.html"; // Adjust URL as needed
        } else {
            const errorData = await response.json();
            const errorDiv = document.getElementById("form-error");
            errorDiv.innerText = errorData.message || "Registration failed.";
            errorDiv.style.display = "block";
        }
    } catch (error) {
        // Handle any network errors or other exceptions
        const errorDiv = document.getElementById("form-error");
        errorDiv.innerText = "An error occurred while submitting the form.";
        errorDiv.style.display = "block";
    }
});