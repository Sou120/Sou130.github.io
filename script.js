// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Modal functionality for contact form
const contactButton = document.getElementById('contactButton');
const modal = document.getElementById('contactModal');
const closeModal = document.querySelector('.close');

contactButton.addEventListener('click', () => {
    modal.style.display = "block";
    modal.setAttribute('aria-hidden', 'false'); // Accessibility
    modal.style.backgroundImage = "url('your-modal-background.jpg')"; // Set background image
    modal.classList.add('fade-in'); // Add transition class
});

closeModal.addEventListener('click', () => {
    modal.classList.remove('fade-in'); // Remove transition class
    modal.style.display = "none";
    modal.setAttribute('aria-hidden', 'true'); // Accessibility
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.classList.remove('fade-in'); // Remove transition class
        modal.style.display = "none";
        modal.setAttribute('aria-hidden', 'true'); // Accessibility
    }
});

// Add event listener to contact form
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Select input fields within the form
    const nameInput = contactForm.querySelector('#name');
    const emailInput = contactForm.querySelector('#email');
    const messageInput = contactForm.querySelector('#message');

    // Get input values
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    // Basic validation
    if (!name || !email || !message) {
        alert('Please fill in all fields.'); // User feedback
        return;
    }

    // Log data (you can replace this with an actual submission)
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

    // Clear form fields
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';

    // Close modal after submission
    modal.classList.remove('fade-in'); // Remove transition class
    modal.style.display = "none";
    modal.setAttribute('aria-hidden', 'true'); // Accessibility
    alert('Thank you for your message!');
});
