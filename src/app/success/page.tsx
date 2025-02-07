import { stripe } from '@/lib/stripe';
import { redirect } from 'next/navigation';
import { usePayment } from '../context/payment-context';

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: { session_id: string };
}) {
  if (!searchParams.session_id) {
    redirect('/');
  }

  const session = await stripe.checkout.sessions.retrieve(
    searchParams.session_id
  );
  const { setPaymentId } = usePayment();
  
  // Set payment ID when session is retrieved
  setPaymentId(session.payment_intent as string);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Thank you for your purchase!</h1>
      <p>Payment ID: {session.payment_intent as string}</p>
    </div>
  );
}

