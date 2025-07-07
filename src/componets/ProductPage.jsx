import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import ProductCard from './ProductCard';

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch(err => {
        console.error('Fetch error:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 p-6">
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <h1 className="text-2xl font-bold mb-4 sm:mb-0">{products.length} Items</h1>
          <div className="flex space-x-4">
            <select className="bg-[#2a2546] text-white p-2 rounded">
              <option>All Categories</option>
            </select>
            <select className="bg-[#2a2546] text-white p-2 rounded">
              <option>Sort By</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </header>

        {loading ? (
          <p className="text-center text-gray-400">Загрузка...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default ProductPage;
