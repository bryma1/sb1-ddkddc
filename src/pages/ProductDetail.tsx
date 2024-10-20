import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Star } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  farmer: string;
  price: number;
  image: string;
  description: string;
  inventory: number;
}

interface Review {
  id: number;
  user: string;
  rating: number;
  comment: string;
}

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [newReview, setNewReview] = useState({ rating: 5, comment: '' });
  const { addToCart } = useCart();

  useEffect(() => {
    // TODO: Fetch product details and reviews from API
    // For now, we'll use dummy data
    setProduct({
      id: 1,
      name: "Fresh Tomatoes",
      farmer: "Green Acres Farm",
      price: 2.99,
      image: "https://images.unsplash.com/photo-1546470427-1f6e7a4b0a71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Juicy, ripe tomatoes picked fresh from our farm. Perfect for salads, sandwiches, or cooking.",
      inventory: 100
    });
    setReviews([
      { id: 1, user: "John D.", rating: 5, comment: "Great tomatoes! Very fresh and tasty." },
      { id: 2, user: "Sarah M.", rating: 4, comment: "Good quality, but a bit pricey." }
    ]);
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
    }
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Submit review to API
    setReviews([...reviews, { id: reviews.length + 1, user: "You", ...newReview }]);
    setNewReview({ rating: 5, comment: '' });
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="md:w-1/2">
        <img src={product.image} alt={product.name} className="w-full rounded-lg shadow-md" />
      </div>
      <div className="md:w-1/2">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-gray-600 mb-4">by {product.farmer}</p>
        <p className="text-2xl font-bold text-green-600 mb-4">${product.price.toFixed(2)}</p>
        <p className="mb-4">{product.description}</p>
        <p className="mb-4">In stock: {product.inventory}</p>
        <button
          onClick={handleAddToCart}
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300"
        >
          Add to Cart
        </button>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Reviews</h2>
          <div className="space-y-4 mb-6">
            {reviews.map(review => (
              <div key={review.id} className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-center mb-2">
                  <span className="font-semibold mr-2">{review.user}</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={i < review.rating ? "text-yellow-400" : "text-gray-300"} size={16} />
                    ))}
                  </div>
                </div>
                <p>{review.comment}</p>
              </div>
            ))}
          </div>
          <form onSubmit={handleReviewSubmit} className="space-y-4">
            <div>
              <label htmlFor="rating" className="block mb-1">Rating</label>
              <select
                id="rating"
                value={newReview.rating}
                onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}
                className="w-full p-2 border rounded"
              >
                {[5, 4, 3, 2, 1].map(num => (
                  <option key={num} value={num}>{num} stars</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="comment" className="block mb-1">Comment</label>
              <textarea
                id="comment"
                value={newReview.comment}
                onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                className="w-full p-2 border rounded"
                rows={3}
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300"
            >
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;