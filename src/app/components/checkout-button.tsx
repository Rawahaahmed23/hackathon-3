'use client';

import { useCart } from "../context/CartContext";



export function CheckoutButton() {
  const { items } = useCart();

  const handleCheckout = async () => {
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items }),
      });

      const { url } = await response.json();
      window.location.href = url;
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <button 
      onClick={handleCheckout}
      className='bg-transparent hover:bg-transparent text-black sm:w-[222px] w-[150px] sm:h-[59px] h-[40px] border-2 border-black rounded-2xl sm:text-xl text-base'
    >
      Checkout with Stripe
    </button>
  );
}