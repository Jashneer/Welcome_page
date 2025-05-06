// Product Filter Function
document.getElementById('searchBar')?.addEventListener('keyup', function() {
    let filter = this.value.toLowerCase();
    document.querySelectorAll('.product').forEach(product => {
        let title = product.querySelector('h2').textContent.toLowerCase();
        product.style.display = title.includes(filter) ? 'block' : 'none';
    });
});

// Dark Mode Toggle
document.getElementById('themeToggle')?.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

// Back Button Redirect
function goBack() {
    window.location.href = 'main.html';
}

// Display Pop-up Message on Page Load
window.onload = function() {
    const messageDiv = document.getElementById('welcomeMessage');
    if (messageDiv) {
        messageDiv.style.display = 'block'; // Show the message

        // Hide the message after 5 seconds
        setTimeout(() => {
            messageDiv.style.display = 'none';
            console.log('Message cleared');
        }, 5000);
    }
};

// Show Alert When Typing in Input
document.getElementById('keyInput')?.addEventListener('keyup', function() {
    alert('You just typed something!');
});

// Quantity Input Validation
document.getElementById('quantityInput')?.addEventListener('change', function() {
    if (this.value < 1) {
        this.value = 1; // Ensure at least 1 product is selected
    }
});

// Smooth Scroll Functionality
document.querySelectorAll('a[href^="#"]')?.forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// Light/Dark Mode Styling
document.body.classList.add('light-mode');
document.getElementById('themeToggle')?.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
});
// Search Bar Filtering
document.getElementById('searchBar')?.addEventListener('keyup', function() {
    let filter = this.value.toLowerCase();
    console.log("Search filter applied:", filter); // Logs the search input value

    document.querySelectorAll('.product').forEach(product => {
        let title = product.querySelector('h2').textContent.toLowerCase();
        console.log("Checking product:", title); // Logs each product being checked
        product.style.display = title.includes(filter) ? 'block' : 'none';
    });
});

// Dark Mode Toggle
document.getElementById('themeToggle')?.addEventListener('click', function() {
    console.log("Theme toggle clicked"); // Logs the button click event
    document.body.classList.toggle('dark-mode');
});
