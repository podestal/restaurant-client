import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51QQXdF1uicrcCl7de8lhY21lOnsJORUe5CIcUfcxZjoXsAUWcoBWnTME8BpC9yOLENueKaHf5f2ITozshpbV0Zou00AwEsD3WZ');

type Props = {
  children: React.ReactNode;
};

const StripeProvider = ({ children }: Props) => {
  return <Elements stripe={stripePromise}>{children}</Elements>;
};

export default StripeProvider;
