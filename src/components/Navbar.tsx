import React from 'react';
import { ShoppingCart, Menu } from 'lucide-react';

interface NavbarProps {
  cartItemCount: number;
  onCartClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartItemCount, onCartClick }) => {
  return (
    <nav className="bg-orange-600 text-white py-4 px-6 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Menu className="h-6 w-6 md:hidden" />
          <h1 className="text-2xl font-bold">BurgerHub</h1>
        </div>
        <button
          onClick={onCartClick}
          className="relative p-2 hover:bg-orange-700 rounded-full transition-colors"
        >
          <ShoppingCart className="h-6 w-6" />
          {cartItemCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-white text-orange-600 rounded-full w-5 h-5 flex items-center justify-center text-sm font-bold">
              {cartItemCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;