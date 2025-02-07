'use client';

import { useCart } from '../context/CartContext';
import Link from 'next/link';

export function CartSummary() {
  const { totalItems, totalPrice } = useCart();

  return (
    <div className="flex items-center space-x-4">
      <Link href="/cart" className="relative">
        <span>🛒 Cart ({totalItems})</span>
        <span className="ml-2">${totalPrice.toFixed(2)}</span>
      </Link>
    </div>
  );
}