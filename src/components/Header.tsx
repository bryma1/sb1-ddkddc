import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, LogOut } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Header: React.FC = () => {
  const { cart } = useCart();
  const { user, logout } = useAuth();

  return (
    <header className="bg-green-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold">FarmFresh</Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/products" className="hover:text-green-200">Products</Link></li>
            <li><Link to="/cart" className="hover:text-green-200 flex items-center">
              <ShoppingCart className="mr-1" size={20} />
              Cart ({cart.length})
            </Link></li>
            {user ? (
              <>
                <li><Link to={user.role === 'farmer' ? "/farmer-dashboard" : "/profile"} className="hover:text-green-200 flex items-center">
                  <User className="mr-1" size={20} />
                  {user.name}
                </Link></li>
                <li><button onClick={logout} className="hover:text-green-200 flex items-center">
                  <LogOut className="mr-1" size={20} />
                  Logout
                </button></li>
              </>
            ) : (
              <li><Link to="/login" className="hover:text-green-200 flex items-center">
                <User className="mr-1" size={20} />
                Login
              </Link></li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;