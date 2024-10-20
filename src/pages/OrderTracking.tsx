import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CheckCircle, Circle } from 'lucide-react';

interface OrderStatus {
  status: 'processing' | 'shipped' | 'out_for_delivery' | 'delivered';
  timestamp: string;
}

const OrderTracking: React.FC = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const [orderStatus, setOrderStatus] = useState<OrderStatus>({ status: 'processing', timestamp: '' });

  useEffect(() => {
    // TODO: Fetch real order status from API
    // For now, we'll use dummy data
    setOrderStatus({ status: 'shipped', timestamp: new Date().toISOString() });
  }, [orderId]);

  const steps = [
    { key: 'processing', label: 'Processing' },
    { key: 'shipped', label: 'Shipped' },
    { key: 'out_for_delivery', label: 'Out for Delivery' },
    { key: 'delivered', label: 'Delivered' },
  ];

  const currentStepIndex = steps.findIndex(step => step.key === orderStatus.status);

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Order Tracking</h1>
      <p className="mb-4">Order ID: {orderId}</p>
      <div className="mb-8">
        <div className="relative">
          {steps.map((step, index) => (
            <div key={step.key} className="flex items-center mb-4">
              {index <= currentStepIndex ? (
                <CheckCircle className="text-green-500" size={24} />
              ) : (
                <Circle className="text-gray-300" size={24} />
              )}
              <span className={`ml-2 ${index <= currentStepIndex ? 'font-semibold' : 'text-gray-500'}`}>
                {step.label}
              </span>{index === currentStepIndex && (
                <span className="ml-2 text-sm text-gray-500">
                  {new Date(orderStatus.timestamp).toLocaleString()}
                </span>
              )}
            </div>
          ))}
          <div className="absolute left-3 top-0 h-full w-0.5 bg-gray-200 -z-10"></div>
        </div>
      </div>
      <p className="text-center text-gray-600">
        Estimated delivery: {new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toLocaleDateString()}
      </p>
    </div>
  );
};

export default OrderTracking;