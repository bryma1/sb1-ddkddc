import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Leaf, TrendingUp, Truck } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  farmer: string;
  price: number;
  image: string;
}

const Home: React.FC = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [seasonalProducts, setSeasonalProducts] = useState<Product[]>([]);

  useEffect(() => {
    // TODO: Fetch featured and seasonal products from API
    // For now, we'll use dummy data
    setFeaturedProducts([
      { id: 1, name: "Fresh Tomatoes", farmer: "Green Acres Farm", price: 2.99, image: "https://images.unsplash.com/photo-1546470427-1f6e7a4b0a71?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
      { id: 2, name: "Organic Apples", farmer: "Sunny Orchard", price: 3.99, image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
    ]);
    setSeasonalProducts([
      { id: 3, name: "Fresh Strawberries", farmer: "Berry Fields", price: 4.99, image: "https://images.unsplash.com/photo-1518635017498-87f514b751ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
      { id: 4, name: "Organic Asparagus", farmer: "Green Valley", price: 3.49, image: "https://images.unsplash.com/photo-1515471209610-dae1c92d8777?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
    ]);
  }, []);

  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to FarmFresh</h1>
        <p className="text-xl mb-8">Connecting farmers and consumers for fresher produce and fairer prices.</p>
        <Link to="/products" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300">
          Shop Now
        </Link>
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        <div className="text-center">
          <Leaf className="mx-auto mb-4" size={48} />
          <h3 className="text-xl font-semibold mb-2">Fresh Produce</h3>
          <p>Directly from local farms to your table.</p>
        </div>
        <div className="text-center">
          <TrendingUp className="mx-auto mb-4" size={48} />
          <h3 className="text-xl font-semibold mb-2">Fair Prices</h3>
          <p>Support farmers with transparent pricing.</p>
        </div>
        <div className="text-center">
          <Truck className="mx-auto mb-4" size={48} />
          <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
          <p>From farm to your doorstep in no time.</p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6 text-center">Featured Products</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-2">by {product.farmer}</p>
                <p className="text-green-600 font-bold">${product.price.toFixed(2)}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6 text-center">Seasonal Highlights</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {seasonalProducts.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-2">by {product.farmer}</p>
                <p className="text-green-600 font-bold">${product.price.toFixed(2)}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;