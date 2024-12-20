import React from 'react';
import { Mail, MessageSquare } from 'lucide-react';
import LocationMap from '../components/shared/LocationMap';

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-xl text-gray-600">We'd love to hear from you!</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center gap-2 mb-6">
            <MessageSquare className="h-6 w-6 text-orange-600" />
            <h2 className="text-xl font-semibold">Send us a Message</h2>
          </div>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded focus:ring-2 focus:ring-orange-600 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full p-2 border rounded focus:ring-2 focus:ring-orange-600 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                rows={4}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-orange-600 focus:border-transparent"
              />
            </div>
            <button className="w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-700 transition-colors">
              Send Message
            </button>
          </form>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center gap-2 mb-6">
            <Mail className="h-6 w-6 text-orange-600" />
            <h2 className="text-xl font-semibold">Other Ways to Reach Us</h2>
          </div>
          <div className="space-y-4">
            <p className="text-gray-600">
              <strong>Email:</strong> info@burgerhub.com
            </p>
            <p className="text-gray-600">
              <strong>Phone:</strong> (555) 123-4567
            </p>
            <p className="text-gray-600">
              <strong>Address:</strong><br />
              123 Burger Street<br />
              Foodie District<br />
              New York, NY 10001
            </p>
          </div>
        </div>
      </div>

      <LocationMap />
    </div>
  );
};

export default Contact;