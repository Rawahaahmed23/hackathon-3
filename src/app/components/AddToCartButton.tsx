'use client';

import { useCart } from "../context/CartContext";



export function AddToCartButton({ product }: any) {
  const { addToCart } = useCart();

  return (
    <button 
      onClick={() => addToCart({
        _id: product._id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1
      })}
      className="bg-blue-500 text-white px-4 py-2 rounded"
    >
      Add to Cart
    </button>
  );
}