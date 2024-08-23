let subtotal = 0;

function updateSubtotal(amount) {
    subtotal = amount;
    document.getElementById('subtotal').innerText = `সাবটোটাল: ${subtotal} টাকা`;
    localStorage.setItem('subtotal', subtotal);
}

function customAmount() {
    const amount = prompt("কাস্টম এমাউন্ট লিখুন:");
    if (amount !== null && !isNaN(amount)) {
        updateSubtotal(parseInt(amount));
    }
}

function goToPayment(method) {
    let paymentGatewayUrl = '';

    if (subtotal === 100 || subtotal === 500 || subtotal === 1000 || subtotal === 5000) {
        switch (method) {
            case 'bkash':
                paymentGatewayUrl = 'https://shop.bkash.com/quraner-fariwalarm50980/paymentlink';
                break;
            case 'card':
                paymentGatewayUrl = 'https://shop.bkash.com/quraner-fariwalarm50980/paymentlin';
                break;
            case 'bank':
                paymentGatewayUrl = 'https://shop.bkash.com/quraner-fariwalarm50980/paymentli';
                break;
            case 'crypto':
                paymentGatewayUrl = 'https://shop.bkash.com/quraner-fariwalarm50980/paymentl';
                break;
        }
    } else {
        switch (method) {
            case 'bkash':
                paymentGatewayUrl = 'https://shop.bkash.com/quraner-fariwalarm50980/paymentlink';
                break;
            case 'card':
                paymentGatewayUrl = 'https://shop.bkash.com/quraner-fariwalarm50980/paymentlin';
                break;
            case 'bank':
                paymentGatewayUrl = 'https://shop.bkash.com/quraner-fariwalarm50980/paymentli';
                break;
            case 'crypto':
                paymentGatewayUrl = 'https://shop.bkash.com/quraner-fariwalarm50980/paymentl';
                break;
        }
    }

    window.location.href = paymentGatewayUrl;
}