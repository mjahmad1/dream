// script.js
document.addEventListener('DOMContentLoaded', (event) => {
// Function to show a message when a social media link is clicked
function showMessage(socialMediaName) {
alert('Thank you for visiting our ' + socialMediaName + ' page!');
}

// Add click event listeners to social media links
const socialLinks = document.querySelectorAll('.social-icons a');
socialLinks.forEach(link => {
link.addEventListener('click', (e) => {
e.preventDefault(); // Prevent the default link behavior
const socialMediaName = link.textContent.trim();
showMessage(socialMediaName);
window.open(link.href, '_blank'); // Open the link in a new tab
});
});
});
