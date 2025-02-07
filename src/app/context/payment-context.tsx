
'use client';

import React, { createContext, useContext, useState } from 'react';

interface PaymentContextType {
  paymentId: string | null;
  setPaymentId: (id: string) => void;
}

const PaymentContext = createContext<PaymentContextType | undefined>(undefined);

export function PaymentProvider({ children }: { children: React.ReactNode }) {
  const [paymentId, setPaymentId] = useState<string | null>(null);

  return (
    <PaymentContext.Provider value={{ paymentId, setPaymentId }}>
      {children}
    </PaymentContext.Provider>
  );
}

export const usePayment = () => {
  const context = useContext(PaymentContext);
  if (!context) throw new Error('usePayment must be used within PaymentProvider');
  return context;
};