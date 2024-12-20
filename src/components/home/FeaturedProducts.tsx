import React from 'react';
import { products } from '../../data/products';
import ProductCard from '../shared/ProductCard';

const FeaturedProducts = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8">Featured Burgers</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;