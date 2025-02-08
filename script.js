const form = document.getElementById('login-form');
const codeInput = document.getElementById('code');
const submitBtn = document.getElementById('submit-btn');
const resultDiv = document.getElementById('result');

const secretCodes = ['Frekles', 'frekles']; // Store both variations
const nextPageUrl = 'main.html'; // Replace with the URL of the new page

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const userInput = codeInput.value.trim();

    if (secretCodes.includes(userInput)) { // Check if input is in the array
        resultDiv.innerHTML = 'hie saloni';
        window.location.href = nextPageUrl; // Redirect to new page
    } else {
        resultDiv.innerHTML = 'Enter the name I called you with that night';
    }
});
