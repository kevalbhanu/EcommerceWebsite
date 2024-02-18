function login(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Check if email and password fields are not empty
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        // Redirect to the eCommerce page after successful login
        window.location.href = 'ecommerce.html';
    } else {
        alert('Please enter both email and password.');
    }
}
