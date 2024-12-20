import React from 'react';
import { ArrowRight } from 'lucide-react';

const Banner = () => {
  return (
    <div className="relative h-[600px] bg-cover bg-center" style={{
      backgroundImage: `url('https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1920&q=80')`
    }}>
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
        <div className="text-white space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold">Gourmet Burgers<br />Made Fresh Daily</h1>
          <p className="text-xl max-w-2xl">Experience the perfect blend of premium ingredients and expert craftsmanship in every bite.</p>
          <button className="flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors">
            Order Now <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;