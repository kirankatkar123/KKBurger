import React from 'react';
import { CreditCard, Truck, User } from 'lucide-react';
import OrderSummary from '../components/checkout/OrderSummary';
import PaymentForm from '../components/checkout/PaymentForm';
import DeliveryForm from '../components/checkout/DeliveryForm';

const Checkout = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-8">
          <section className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center gap-2 mb-4">
              <User className="h-5 w-5 text-orange-600" />
              <h2 className="text-xl font-semibold">Contact Information</h2>
            </div>
            <DeliveryForm />
          </section>
          
          <section className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center gap-2 mb-4">
              <Truck className="h-5 w-5 text-orange-600" />
              <h2 className="text-xl font-semibold">Delivery Details</h2>
            </div>
            <DeliveryForm />
          </section>

          <section className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center gap-2 mb-4">
              <CreditCard className="h-5 w-5 text-orange-600" />
              <h2 className="text-xl font-semibold">Payment</h2>
            </div>
            <PaymentForm />
          </section>
        </div>

        <OrderSummary />
      </div>
    </div>
  );
};

export default Checkout;