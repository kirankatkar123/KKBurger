import React from 'react';
import { Award, Users, Leaf } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Story</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Founded in 2020, BurgerHub has been serving the finest gourmet burgers made with premium ingredients and love.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="text-center p-6">
          <Award className="h-12 w-12 text-orange-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Quality First</h3>
          <p className="text-gray-600">Premium ingredients sourced from local suppliers.</p>
        </div>
        <div className="text-center p-6">
          <Users className="h-12 w-12 text-orange-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
          <p className="text-gray-600">Skilled chefs crafting perfect burgers.</p>
        </div>
        <div className="text-center p-6">
          <Leaf className="h-12 w-12 text-orange-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Sustainable</h3>
          <p className="text-gray-600">Eco-friendly packaging and practices.</p>
        </div>
      </div>

      <img
        src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1920&q=80"
        alt="Our Restaurant"
        className="w-full h-[600px] object-cover rounded-lg mb-16"
      />
    </div>
  );
};

export default About;