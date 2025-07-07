import React from 'react';

const ProductCard = ({ product }) => (
  <div className="bg-[#1e1b3a] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
    <img
      src={product.thumbnail}
      alt={product.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-4 space-y-1">
      <p className="text-sm text-gray-400 uppercase">{product.category}</p>
      <h3 className="text-lg font-semibold">{product.title}</h3>
      <p className="text-purple-400 font-bold">${product.price}</p>
      <button className="mt-2 w-full bg-purple-600 hover:bg-purple-700 py-2 rounded transition">
        Buy Now
      </button>
    </div>
  </div>
);

export default ProductCard;

