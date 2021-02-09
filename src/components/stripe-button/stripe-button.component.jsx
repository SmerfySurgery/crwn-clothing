import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton =({price})=>{
    const priceForStripe = price*100;
    const publishableKey ='pk_test_51IIc3fBwODUdu9Iy52oQM8xL17ims9bY1n9Tz7HDYOIPzEyQ2SI4jG8G0GeL86g97Dxbh7mLdilOPzTpUyQaLk85008gt03lii'
const onToken=token=>{
    console.log(token);
    alert('Your payment is successful');
}
    return(
        <StripeCheckout
        label='Pay Now'
        name='CRWN Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}/>
    );
};

export default StripeCheckoutButton;