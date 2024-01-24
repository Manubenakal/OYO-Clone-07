import axios from 'axios';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { useEffect } from 'react';

const Payment = () => {
  const router = useRouter();

  const makePayment = async () => {
    const val = {
      id: router.query?.id,
    };
    const { data } = await axios.post('/api/razorpay', val);
    console.log(data);

    const options = {
      key: process.env.RAZORPAY_KEY,
      name: 'Manu',
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      description: 'Thank you!',
      handler: function (response) {},
      prefill: {
        name: 'Manu',
        email: 'mbenakal@gmail.com',
        contact: 9874563210,
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  useEffect(() => {
    makePayment();
  }, []);

  return (
    <>
      <Script src='http://checkout.razorpay.com/v1/checkout.js' />
    </>
  );
};

export default Payment;
