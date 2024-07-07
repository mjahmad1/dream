
// Initialize Stripe with your publishable key
var stripe = Stripe('pk_live_51PZzciCyC8OWGlHKxmnWEFHf35h9eqQdLfXkQy4coHfiKFfs4Q0znWh7qHi7N9TKNWnlnttZ8kAgtKK0ygmBp5Nn00DvLhJnlx');

// Function to update the displayed amount and handle the selected class
function updateDisplayedAmount(amount, button) {
document.getElementById('donateNow').innerText = 'Donate ' + amount + ' Tk';
// Remove selected class from all buttons
var donationButtons = document.querySelectorAll('.donation-button');
donationButtons.forEach(function(btn) {
btn.classList.remove('selected');
});
// Add selected class to the clicked button
if (button) {
button.classList.add('selected');
}
}

// Event listeners for the donation buttons
var donationButtons = document.querySelectorAll('.donation-button');
donationButtons.forEach(function(button) {
button.addEventListener('click', function() {
var amount = this.getAttribute('data-amount');
updateDisplayedAmount(amount, this); // Pass the clicked button as well
});
});

// Event listener for the custom amount input
document.getElementById('customAmount').addEventListener('input', function() {
var amount = this.value;
updateDisplayedAmount(amount); // Update the display
});

// Modify the existing donateNow click event handler
document.getElementById('donateNow').addEventListener('click', function() {
// Get the selected amount from the selected donation button or the custom amount input
var selectedAmount = document.querySelector('.donation-button.selected')?.getAttribute('data-amount') || document.getElementById('customAmount').value;

// Check if the selected amount is not empty or null
if (selectedAmount && selectedAmount.trim() !== '') {
console.log('Selected donation amount: ' + selectedAmount + ' Tk');

// Redirect to Stripe checkout page with the selected amount
stripe.redirectToCheckout({
lineItems: [{ price: 'price_ID', quantity: 1 }], // Replace 'price_ID' with your actual price ID
mode: 'payment',
successUrl: window.location.protocol + '//' + window.location.host + '/success.html', // Replace with your success URL
cancelUrl: window.location.protocol + '//' + window.location.host + '/cancel.html', // Replace with your cancel URL
}).then(function (result) {
if (result.error) {
// If `redirectToCheckout` fails due to a browser or network
// error, display the localized error message to your customer.
alert(result.error.message);
}
});
} else {
// If no amount is selected, alert the user and do not proceed to checkout
alert('Please select an amount to donate.');
}
});
