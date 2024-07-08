const stripe = Stripe('pk_test_51PZzciCyC8OWGlHKRThmLWoQvX29CC6L8d6ExLaM6xGYdXSAQ6ksP4yxqKRLHLvNIIw2OdweUNOe2iNXpCHpXH7W00k6g9ZBKG');

const appearance = { /* appearance */ };
const options = { /* options */ };
const elements = stripe.elements({ clientSecret, appearance });
const paymentElement = elements.create('payment', options);
paymentElement.mount('#payment-element');


const stripe = Stripe('pk_test_51PZzciCyC8OWGlHKRThmLWoQvX29CC6L8d6ExLaM6xGYdXSAQ6ksP4yxqKRLHLvNIIw2OdweUNOe2iNXpCHpXH7W00k6g9ZBKG');

const appearance = { /* appearance */ };
const options = {
  layout: {
    type: 'tabs',
    defaultCollapsed: false,
  }
};
const elements = stripe.elements({ clientSecret, appearance });
const paymentElement = elements.create('payment', options);
paymentElement.mount('#payment-element');


const stripe = Stripe('pk_test_51PZzciCyC8OWGlHKRThmLWoQvX29CC6L8d6ExLaM6xGYdXSAQ6ksP4yxqKRLHLvNIIw2OdweUNOe2iNXpCHpXH7W00k6g9ZBKG');

const appearance = {
  theme: 'flat',
  variables: { colorPrimaryText: '#262626' }
};
const options = { /* options */ };
const elements = stripe.elements({ clientSecret, appearance });
const paymentElement = elements.create('payment', options);
paymentElement.mount('#payment-element');




const stripe = Stripe('pk_test_51PZzciCyC8OWGlHKRThmLWoQvX29CC6L8d6ExLaM6xGYdXSAQ6ksP4yxqKRLHLvNIIw2OdweUNOe2iNXpCHpXH7W00k6g9ZBKG');

const appearance = { /* appearance */};
const options = {
  business: "RocketRides"
};
const clientSecret = {{CLIENT_SECRET}};
const elements = stripe.elements(appearance, clientSecret);
const paymentElement = elements.create('payment', options);
paymentElement.mount('#payment-element');



