import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { Plus, Minus, ShoppingBag } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-8">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[500px] object-cover rounded-lg"
        />
        <div className="space-y-6">
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <p className="text-gray-600 text-lg">{product.description}</p>
          <div className="text-3xl font-bold text-orange-600">
            ${product.price.toFixed(2)}
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 border rounded">
              <Minus className="h-5 w-5" />
            </button>
            <span className="text-xl">1</span>
            <button className="p-2 border rounded">
              <Plus className="h-5 w-5" />
            </button>
          </div>
          <button className="flex items-center justify-center gap-2 w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition-colors">
            <ShoppingBag className="h-5 w-5" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;