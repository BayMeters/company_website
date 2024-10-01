import React, { useState, useEffect } from 'react';
import ProductSearch from './ProductQuery';
import ProductCard from './ProductCard';
import ViewMoreButton from './ViewMoreButton';
import IndustryList from './ProductCategoryList';
import { Link } from 'react-router-dom';

const ProductShowcase = () => {
  const industries = IndustryList();
  const [activeTab, setActiveTab] = useState(industries[0] || '');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (activeTab) {
      const fetchedProducts = ProductSearch({ type: activeTab });
      setProducts(fetchedProducts);
    }
  }, [activeTab]);

  useEffect(() => {
    if (industries.length > 0 && !activeTab) {
      setActiveTab(industries[0]);
    }
  }, [industries, activeTab]);

  return (
    <div className="my-8 mx-8">
      <Link to='/products' className="cursor-pointer text-6xl font-anek font-medium text-green-50 mb-2 hover:text-green-600">Our Products</Link>
      <div className="flex overflow-x-auto mb-6 space-x-10">
        {industries.map((industry) => (
          <button
            key={industry}
            className={`px-1 py-2 whitespace-nowrap relative font-extralight text-lg transition duration-300 ease-in-out group 
              ${activeTab === industry
                ? 'text-teal-950'
                : 'text-teal-700 hover:text-teal-950'}`
              }   
            onClick={() => setActiveTab(industry)}
          >
            {industry}
            <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-5/6 h-0.5 bg-teal-950 transition-all duration-300 ease-in-out ${
              activeTab === industry
                ? 'opacity-100'
                : 'opacity-0 group-hover:opacity-100'
            }`}></span>
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.slice(0,3).map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}

        <div className={`items-center justify-center
          ${products.length === 0 || products.length > 2
            ? 'sm:col-span-1 lg:col-span-3 items-center justify-center'
            : 'sm:col-span-2 lg:col-span-1'}`
        }>
          <ViewMoreButton className="w-full h-full" activeTab={activeTab} />
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;