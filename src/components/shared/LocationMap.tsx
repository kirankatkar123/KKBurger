import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';

const LocationMap = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Visit Our Restaurant</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="h-6 w-6 text-orange-600 mt-1" />
              <div>
                <h3 className="font-semibold">Address</h3>
                <p className="text-gray-600">123 Burger Street, Foodie District<br />New York, NY 10001</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="h-6 w-6 text-orange-600 mt-1" />
              <div>
                <h3 className="font-semibold">Hours</h3>
                <p className="text-gray-600">Mon-Sun: 11:00 AM - 10:00 PM</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="h-6 w-6 text-orange-600 mt-1" />
              <div>
                <h3 className="font-semibold">Contact</h3>
                <p className="text-gray-600">(555) 123-4567</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[400px] bg-gray-200 rounded-lg">
          {/* Replace with actual map implementation */}
          <div className="h-full flex items-center justify-center text-gray-500">
            Map will be displayed here
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;