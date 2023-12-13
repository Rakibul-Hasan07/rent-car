"use client"

import getStripePromise from "@/utils/stripe";


const StripeCheckout = ({ booking }) => {
    const handleCheckout = async () => {
        const stripe = await getStripePromise();

        const response = await fetch('/api/stripe-session', {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            cache: 'no-store',
            body: JSON.stringify([booking])
        })
        const result = await response.json();
        if (result) {
            stripe?.redirectToCheckout({ sessionId: result.id })
        }

    }
    return (
        <div className="mt-2">
            <button onClick={handleCheckout} className="bg-sky-400 py-2 px-3 rounded-md">Checkout</button>
        </div>
    );
};

export default StripeCheckout;