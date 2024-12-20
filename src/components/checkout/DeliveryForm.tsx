import React from 'react';

const DeliveryForm = () => {
  return (
    <form className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">First Name</label>
          <input
            type="text"
            className="w-full p-2 border rounded focus:ring-2 focus:ring-orange-600 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Last Name</label>
          <input
            type="text"
            className="w-full p-2 border rounded focus:ring-2 focus:ring-orange-600 focus:border-transparent"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Street Address</label>
        <input
          type="text"
          className="w-full p-2 border rounded focus:ring-2 focus:ring-orange-600 focus:border-transparent"
        />
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">City</label>
          <input
            type="text"
            className="w-full p-2 border rounded focus:ring-2 focus:ring-orange-600 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">State</label>
          <input
            type="text"
            className="w-full p-2 border rounded focus:ring-2 focus:ring-orange-600 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">ZIP Code</label>
          <input
            type="text"
            className="w-full p-2 border rounded focus:ring-2 focus:ring-orange-600 focus:border-transparent"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Phone</label>
        <input
          type="tel"
          className="w-full p-2 border rounded focus:ring-2 focus:ring-orange-600 focus:border-transparent"
        />
      </div>
    </form>
  );
};

export default DeliveryForm;