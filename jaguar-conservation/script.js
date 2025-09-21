// Part 1: Variable Declarations and Conditionals
// Variables for form elements and donation tracking
const form = document.getElementById('conservation-form');
const interestSelect = document.getElementById('interest');
const donationStatus = document.getElementById('donation-status');
const newsletterCheckbox = document.getElementById('newsletter');
let donationCount = 0; // Tracks donation submissions

// Conditional to check if form exists before adding listeners
if (form) {
    form.addEventListener('submit', handleFormSubmit);
} else {
    console.error('Form element not found');
}

// Part 2: Custom Functions
// Function to update donation status message based on interest type
function updateDonationStatus(interest) {
    if (interest === 'donation') {
        donationCount++;
        donationStatus.textContent = `Thank you! Donation #${donationCount} submitted.`;
        donationStatus.style.backgroundColor = '#d4edda'; // Green for success
    } else if (interest === 'volunteer') {
        donationStatus.textContent = 'Great! We’ll contact you about volunteering opportunities.';
        donationStatus.style.backgroundColor = '#fff3cd'; // Yellow for volunteer
    } else {
        donationStatus.textContent = 'Thanks for your interest! We’ll send more info soon.';
        donationStatus.style.backgroundColor = '#cce5ff'; // Blue for info
    }
}

// Function to validate message length (beyond HTML5 validation)
function validateMessageLength(message) {
    return message.length >= 10 && message.length <= 500;
}

// Part 3: Loop Examples
// Loop 1: Add class to all list items for dynamic styling
const factItems = document.querySelectorAll('.jaguar-facts li');
for (let i = 0; i < factItems.length; i++) {
    factItems[i].classList.add('fact-item');
}

// Loop 2: Log table data for debugging (example of accessing table content)
const tableRows = document.querySelectorAll('.habitats-table tbody tr');
tableRows.forEach(row => {
    const cells = row.querySelectorAll('td');
    const rowData = Array.from(cells).map(cell => cell.textContent);
    console.log('Table row data:', rowData);
});

// Part 4: DOM Interactions
// Interaction 1: Form submission handler
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission
    const interest = interestSelect.value;
    const message = document.getElementById('message').value;

    // Validate message length using custom function
    if (validateMessageLength(message)) {
        updateDonationStatus(interest);
    } else {
        donationStatus.textContent = 'Error: Message must be 10-500 characters.';
        donationStatus.style.backgroundColor = '#f8d7da'; // Red for error
    }
}

// Interaction 2: Toggle newsletter checkbox label color on click
newsletterCheckbox.addEventListener('change', () => {
    const label = newsletterCheckbox.parentElement;
    label.style.color = newsletterCheckbox.checked ? '#4a2c0d' : '#666';
});

// Interaction 3: Highlight table rows on hover
tableRows.forEach(row => {
    row.addEventListener('mouseenter', () => {
        row.style.backgroundColor = '#f4e4bc';
    });
    row.addEventListener('mouseleave', () => {
        row.style.backgroundColor = '';
    });
});