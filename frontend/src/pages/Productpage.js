import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout.js';
import ProductList from '../components/ProductCategoryList';

const ProductPage = () => {
  const categories = ProductList();

  // Mapping of product types to their image files
  const categoryImages = {
    'Flow': ['FLC240-1.png'],
    'Level': ['WSU300-1.png'],
    'Pressure': ['PM556-1.png'],
    'Temperature': ['TSR500-1.png'],
    'Analysis': ['MDA-PH-1.png'],
    'System Products': ['RN3000-1.png']
  };

  // Function to get an image for each category or return a placeholder
  const getImageForCategory = (category) => {
    if (categoryImages[category] && categoryImages[category].length > 0) {
      return `/Pictures/${categoryImages[category][0]}`;
    } else {
      return '/Assets/coming-soon.png'; 
    }
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
                  src={getImageForCategory(category)} 
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