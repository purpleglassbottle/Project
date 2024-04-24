document.getElementById('register-form').addEventListener('submit', async function (e) {
    e.preventDefault(); // Prevent normal form submission
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('password-confirm').value;
    const errorDiv = document.getElementById('form-error');
    
    errorDiv.style.display = 'none'; // Hide error message before validation

    // Client-side validation
    if (password !== confirmPassword) {
        errorDiv.innerText = 'Passwords do not match';
        errorDiv.style.display = 'block';
        return;
    }

    // Prepare the form data
    const formData = {
        username: username,
        email: email,
        password: password
    };

    try {
        // Fetch POST request to submit form data
        const response = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const result = await response.json();

        if (response.ok) {
            // Registration was successful
            alert('Registration successful!');
            // Redirect or do other things based on success
        } else {
            // Handle server-side errors
            errorDiv.innerText = result.error || 'Registration failed';
            errorDiv.style.display = 'block';
        }
    } catch (error) {
        errorDiv.innerText = 'An error occurred during registration';
        errorDiv.style.display = 'block';
    }
});