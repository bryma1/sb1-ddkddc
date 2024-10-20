import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

interface Product {
  id: number;
  name: string;
  price: number;
  inventory: number;
}

interface Order {
  id: number;
  products: { id: number; quantity: number }[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
}

const FarmerDashboard: React.FC = () => {
  const { user } = useAuth();
  const [products, setProducts] = useState<Product[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    // TODO: Fetch farmer's products and orders from API
    // For now, we'll use mock data
    setProducts([
      { id: 1, name: 'Fresh Tomatoes', price: 2.99, inventory: 100 },
      { id: 2, name: 'Organic Apples', price: 3.99, inventory: 75 },
    ]);
    setOrders([
      { id: 1, products: [{ id: 1, quantity: 5 }], total: 14.95, status: 'pending' },
      { id: 2, products: [{ id: 2, quantity: 3 }], total: 11.97, status: 'processing' },
    ]);
  }, []);

  const handleInventoryUpdate = (productId: number, newInventory: number) => {
    // TODO: Update inventory in the backend
    setProducts(products.map(p => p.id === productId ? { ...p, inventory: newInventory } : p));
  };

  const handleOrderStatusUpdate = (orderId: number, newStatus: Order['status']) => {
    // TODO: Update order status in the backend
    setOrders(orders.map(o => o.id === orderId ? { ...o, status: newStatus } : o));
  };

  if (!user || user.role !== 'farmer') {
    return <div>Access denied. This page is for farmers only.</div>;
  }

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Farmer Dashboard</h1>
      
      <section>
        <h2 className="text-2xl font-semibold mb-4">Your Products</h2>
        <div className="space-y-4">
          {products.map(product => (
            <div key={product.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
              <div>
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-gray-600">${product.price.toFixed(2)}</p>
              </div>
              <div className="flex items-center space-x-4">
                <span>Inventory: {product.inventory}</span>
                <input
                  type="number"
                  value={product.inventory}
                  onChange={(e) => handleInventoryUpdate(product.id, parseInt(e.target.value))}
                  className="w-20 p-1 border rounded"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Recent Orders</h2>
        <div className="space-y-4">
          {orders.map(order => (
            <div key={order.id} className="bg-white p-4 rounded-lg shadow">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold">Order #{order.id}</span>
                <span className="text-green-600 font-semibold">${order.total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Status: {order.status}</span>
                <select
                  value={order.status}
                  onChange={(e) => handleOrderStatusUpdate(order.id, e.target.value as Order['status'])}
                  className="p-1 border rounded"
                >
                  <option value="pending">Pending</option>
                  <option value="processing">Processing</option>
                  <option value="shipped">Shipped</option>
                  <option value="delivered">Delivered</option>
                </select>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FarmerDashboard;