// Function to handle profile picture preview
function previewProfilePic(input) {
    const file = input.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('profile-pic-preview').src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}

// Function to handle profile edit form submission
function handleProfileEdit(event) {
    event.preventDefault(); // Prevent default form submission

    const form = document.querySelector('form');
    const formData = new FormData(form);

    fetch('/api/profile', {
        method: 'POST',
        body: formData,
    })
    .then((response) => {
        if (response.ok) {
            return response.json(); // Handle JSON response
        } else {
            throw new Error('Profile update failed.'); // Error if response is not OK
        }
    })
    .then((data) => {
        if (data.success) {
            alert("Profile updated successfully!");
        } else {
            throw new Error("An error occurred while updating your profile. Please try again later.");
        }
    })
    .catch((error) => {
        console.error("Error updating profile:", error);
        alert("An error occurred while updating your profile. Please try again later."); // General error message
    });
}

// Function to show feedback message
function showFeedbackMessage(message, type) {
    const feedbackElement = document.getElementById('feedback-message');

    if (feedbackElement) {
        feedbackElement.textContent = message; // Set the feedback message
        feedbackElement.className = `alert alert-${type}`; // Set alert class based on message type
        feedbackElement.style.display = "block"; // Display the feedback element
    }
}