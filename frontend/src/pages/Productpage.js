import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout.js';
import ProductList from '../components/ProductCategoryList';

const ProductPage = () => {
  const categories = ProductList();

  // Mapping of product types to their image files
  const categoryImages = {
    'Flow': ['FLC240-1.png', 'FVC240-1.png'],
    'Level': ['WSU300-1.png'],
    'Pressure': ['PM556-1.png'],
    'Temperature': ['TRC200-1.png'],
    'Analysis': ['MDA-U1-1.png'],
    'System Products': ['RN3000-1.png']
  };

  // Function to get a random image for each category
  const getRandomImageForCategory = (category) => {
    const images = categoryImages[category] || [];
    if (images.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * images.length);
    return `/Pictures/${images[randomIndex]}`;
  };

  return (
    <Layout>
      <div className="container mx-auto sm:px-8 lg:px-24 py-8 pb-16">
        <h1 className="text-6xl font-anek font-medium text-green-50 mb-8">Our Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={`/products/${encodeURIComponent(category)}`}
              className="bg-white rounded-sm shadow-md hover:shadow-lg transition-shadow duration-300 border border-teal-200 overflow-hidden"
            >
              <div className="h-48 overflow-hidden justify-center m-4">
                <img 
                  src={getRandomImageForCategory(category)} 
                  alt={`${category} category`}
                  className="w-full h-full object-contain transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-anek font-medium text-teal-900 mb-2">{category}</h2>
                <p className="text-teal-700 font-extralight">Explore our {category.toLowerCase()} products</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProductPage;