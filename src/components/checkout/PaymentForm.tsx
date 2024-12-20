import React from 'react';

const PaymentForm = () => {
  return (
    <form className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Card Number</label>
        <input
          type="text"
          placeholder="1234 5678 9012 3456"
          className="w-full p-2 border rounded focus:ring-2 focus:ring-orange-600 focus:border-transparent"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Expiry Date</label>
          <input
            type="text"
            placeholder="MM/YY"
            className="w-full p-2 border rounded focus:ring-2 focus:ring-orange-600 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">CVV</label>
          <input
            type="text"
            placeholder="123"
            className="w-full p-2 border rounded focus:ring-2 focus:ring-orange-600 focus:border-transparent"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Name on Card</label>
        <input
          type="text"
          placeholder="John Doe"
          className="w-full p-2 border rounded focus:ring-2 focus:ring-orange-600 focus:border-transparent"
        />
      </div>
    </form>
  );
};

export default PaymentForm;