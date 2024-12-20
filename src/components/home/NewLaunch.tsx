import React from 'react';
import { Sparkles } from 'lucide-react';

const NewLaunch = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-2xl p-8 text-white">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="h-6 w-6" />
          <h2 className="text-2xl font-bold">New Launch</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-4xl font-bold mb-4">The Ultimate BBQ Beast</h3>
            <p className="text-lg mb-6">Double smoked bacon, crispy onion rings, signature BBQ sauce, and premium Angus beef patty.</p>
            <button className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors">
              Try Now
            </button>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80"
            alt="BBQ Beast Burger"
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default NewLaunch;