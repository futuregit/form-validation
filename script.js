const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;

function vaildateForm() {
    // Using Constraint API
    isValid = form.checkValidity();
    console.log(isValid);
    // Style main message for an error
    message.textContent = 'Please fill out all the fields.';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
}

function processFormData(e) {
    e.preventDefault();
    // Validate Form
    vaildateForm();
}

// Event Listener
form.addEventListener('submit', processFormData);
