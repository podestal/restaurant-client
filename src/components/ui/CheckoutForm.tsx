import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { CreateOrderData } from '../../hooks/api/order/useCreateOrder';
import { UseMutationResult } from '@tanstack/react-query';
import { Order } from '../../services/api/orderService';
import useAuthStore from '../../hooks/store/useAuthStore';
import useNotificationsStore from '../../hooks/store/useNotificationsStore';

type CheckoutFormProps = {
  amount: number
  createOrder: UseMutationResult<Order, Error, CreateOrderData>
  orderType: number
  name: string
  phone: string
  email: string
  address: string
};

const CheckoutForm: React.FC<CheckoutFormProps> = ({ 
  amount, 
  createOrder, 
  orderType, 
  name,
  phone,
  email,
  address,
  }) => {


    const { setMessage, setShow, setType } = useNotificationsStore()
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate()
    const access = useAuthStore(s => s.access) || ''

    const handleSuccess = () => {

        const order_type = orderType === 1 ? 'T' : 'D'

        createOrder.mutate({ 
            order: { 
                status: 'S', 
                order_type, 
                table: null,
                customer_name: name,
                customer_phone: phone,
                customer_email: email,
                customer_address: address,
        }, access }, {
            onSuccess: () => {
                navigate('/success')
            }, 
            onError: error => {
                setShow(true)
                setType('error')
                setMessage(`Error: ${error.message}`)
            }
        })
  }

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setLoading(true);
      setError(null);
    
      if (!stripe || !elements) {
        setError("Stripe has not loaded yet.");
        setLoading(false);
        return;
      }
    
      try {
        // Step 1: Create PaymentIntent
        const { data } = await axios.post('http://127.0.0.1:8000/api/process-payment/', { 
          amount,
          payment_method_id: "pm_card_visa"
        });
    
        const clientSecret = data.client_secret;
    
        // Step 2: Confirm PaymentIntent
        const cardElement = elements.getElement(CardElement);
        if (!cardElement) {
          throw new Error("Card element not found");
        }
    
        const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: cardElement,
          },
        });
    
        if (stripeError) {
          setError(stripeError.message || "An error occurred.");
        } else if (paymentIntent?.status === "succeeded") {
          handleSuccess()
          setSuccess(true);
        } else {
          setError("Payment was not successful. Please try again.");
        }
      } catch (err: any) {
        console.log(err);
        setError(err.response?.data?.error || "An error occurred.");
      } finally {
        setLoading(false);
      }
    };
    

    return (
      <div className="max-w-md mx-auto">
        {success ? (
          <p className="text-green-500 text-center">Payment Successful!</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <CardElement
              className="border p-2 rounded-md"
              options={{
                style: {
                  base: {
                    fontSize: '16px',
                    color: '#32325d',
                    '::placeholder': {
                      color: '#aab7c4',
                    },
                  },
                  invalid: {
                    color: '#fa755a',
                  },
                },
              }}
            />
            <button
              type="submit"
              disabled={!stripe || loading}
              className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
            >
              {loading ? 'Processing...' : 'Pay'}
            </button>
            {error && <p className="text-red-500 text-center">{error}</p>}
          </form>
        )}
      </div>
    );
  };

  export default CheckoutForm;
