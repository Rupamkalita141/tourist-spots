document.addEventListener('DOMContentLoaded', () => {
    // Select all elements with the class 'details-button'
    const detailButtons = document.querySelectorAll('.details-button');

    // Loop through each button and attach a click event listener
    detailButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Get the parent card of the clicked button
            const spotCard = event.target.closest('.spot-card');
            
            // Find the hidden-details div inside that card
            const hiddenDetails = spotCard.querySelector('.hidden-details');
            
            // Toggle the 'show' class to display/hide the content
            hiddenDetails.classList.toggle('show');

            // Change the button text based on the state
            if (hiddenDetails.classList.contains('show')) {
                event.target.textContent = 'Hide Details';
            } else {
                event.target.textContent = 'Show Details';
            }
        });
    });

    // Add a simple alert for the non-functional form submission
    const form = document.getElementById('add-place-form');
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent actual form submission
            alert('Thank you for your submission! This is a static site demonstration, so your input was not saved.');
            form.reset(); // Clear the form fields
        });
    }
});