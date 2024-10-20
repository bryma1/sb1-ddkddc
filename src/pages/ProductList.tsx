import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  farmer: string;
  price: number;
  image: string;
  category: string;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    // TODO: Fetch products from API
    // For now, we'll use dummy data
    setProducts([
      { id: 1, name: "Fresh Tomatoes", farmer: "Green Acres Farm", price: 2.99, image: "https://images.unsplash.com/photo-1546470427-1f6e7a4b0a71?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80", category: "Vegetables" },
      { id: 2, name: "Organic Apples", farmer: "Sunny Orchard", price: 3.99, image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80", category: "Fruits" },
      { id: 3, name: "Fresh Lettuce", farmer: "Valley Greens", price: 1.99, image: "https://images.unsplash.com/photo-1556801712-76c8eb07bbc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80", category: "Vegetables" },
    ]);
  }, []);

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === '' || product.category === selectedCategory)
  );

  const categories = Array.from(new Set(products.map(p => p.category)));

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      
      <div className="mb-6 flex space-x-4">
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 pl-10 border rounded"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">All Categories</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-2">by {product.farmer}</p>
              <p className="text-green-600 font-bold">${product.price.toFixed(2)}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;