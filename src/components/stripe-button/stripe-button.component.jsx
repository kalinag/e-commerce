import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price})=> {
    const priceForStripe = price*100;
    const publishableKey = 'pk_test_51IyJ2JA7vjdYuqLS8cLBn6QkxvSq9QzviivHRH6f0KQvQzKS8SvVug1URA71HwxEvzfzFdSgBx8GN81GwmfwCHva000eElL0gC'

    const onToken = token => {
        
        alert('Payment transaction is successful')
    }

    return(
        <StripeCheckout label = 'Pay Now' name = 'Clothing Shop' billingAddress shippingAddress description={`Your total is ${price}`} amount={priceForStripe} panelLabel='Pay Now' token = {onToken}
        stripeKey={publishableKey}/>
    )
};

export default StripeCheckoutButton;