document.getElementById('register-form').addEventListener('submit', async function (e) {
    e.preventDefault(); // Prevent default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;

    const data = {
        username: username,
        password: password,
        email: email
    };

    // Error message element
    const errorDiv = document.getElementById('form-error');
    errorDiv.style.display = 'none'; // Hide error message initially

    try {
        // Fetch POST request to backend endpoint
        const response = await fetch('/api/register', { // Adjust the endpoint as needed
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            // If successful, redirect to the desired page
            window.location.href = '/finalize-registration.html'; // Adjust the URL for your setup
        } else {
            const result = await response.json();
            errorDiv.innerText = result.error || 'Registration failed';
            errorDiv.style.display = 'block';
        }
    } catch (error) {
        errorDiv.innerText = 'An error occurred during registration';
        errorDiv.style.display = 'block';
    }
});