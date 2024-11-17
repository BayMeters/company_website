import React, { useState, useEffect } from 'react';
import ProductSearch from './ProductQuery';
import ProductCard from './ProductCard';
import ViewMoreButton from './ViewMoreButton';
import IndustryList from './ProductCategoryList';
import { Link } from 'react-router-dom';

const ProductShowcase = () => {
  const industries = IndustryList();
  const [state, setState] = useState({
    products: [],
    isLoading: true,
    error: null
  });
  const [activeTab, setActiveTab] = useState(industries[0] || '');

  useEffect(() => {
    if (industries.length > 0 && !activeTab) {
      setActiveTab(industries[0]);
    }
  }, [industries, activeTab]);

  useEffect(() => {
    let isMounted = true;

    const fetchProducts = async () => {
      if (!activeTab) return;

      setState(prev => ({ ...prev, isLoading: true, error: null }));
      
      try {
        const fetchedProducts = await ProductSearch({ type: activeTab });
        
        if (isMounted) {
          setState({
            products: fetchedProducts,
            isLoading: false,
            error: null
          });
        }
      } catch (err) {
        if (isMounted) {
          setState({
            products: [],
            isLoading: false,
            error: 'Failed to load products'
          });
        }
      }
    };

    fetchProducts();

    return () => {
      isMounted = false;
    };
  }, [activeTab]);

  const renderTabs = () => (
    <div className="flex overflow-x-auto mb-6 space-x-10">
      {industries.map((industry) => (
        <button
          key={industry}
          className={`px-1 py-2 whitespace-nowrap relative font-extralight text-lg transition duration-300 ease-in-out group
            ${activeTab === industry ? 'text-teal-950' : 'text-teal-700 hover:text-teal-950'}`
          }
          onClick={() => setActiveTab(industry)}
          disabled={state.isLoading}
        >
          {industry}
          <span 
            className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-5/6 h-0.5 bg-teal-950 transition-all duration-300 ease-in-out 
              ${activeTab === industry ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`
            }
          />
        </button>
      ))}
    </div>
  );

  const renderContent = () => {
    if (state.isLoading) {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4 animate-pulse">
              <div className="aspect-square bg-gray-200 rounded mb-4" /> {/* Image skeleton */}
              <div className="space-y-2">
                <div className="h-6 bg-gray-200 rounded w-3/4" /> {/* Title skeleton */}
                <div className="h-4 bg-gray-200 rounded w-1/2" /> {/* Subtitle skeleton */}
              </div>
            </div>
          ))}
          <div className="sm:col-span-1 lg:col-span-3 flex items-center justify-center">
            <div className="h-12 w-48 bg-gray-200 rounded animate-pulse" /> {/* View More button skeleton */}
          </div>
        </div>
      );
    }

    if (state.error) {
      return (
        <div className="text-center py-8">
          <div className="inline-flex items-center px-4 py-2 rounded-md bg-red-50 text-red-700">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            {state.error}
          </div>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {state.products.slice(0, 3).map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
        <div 
          className={`items-center justify-center ${
            state.products.length === 0 || state.products.length > 2
              ? 'sm:col-span-1 lg:col-span-3 items-center justify-center'
              : 'sm:col-span-2 lg:col-span-1'
          }`}
        >
          <ViewMoreButton className="w-full h-full" activeTab={activeTab} />
        </div>
      </div>
    );
  };

  return (
    <div className="my-8 mx-8">
      <Link 
        to='/products' 
        className="inline-block text-6xl font-anek font-medium text-green-50 mb-2 hover:text-green-600 transition-colors duration-300"
      >
        Our Products
      </Link>
      {renderTabs()}
      {renderContent()}
    </div>
  );
};

export default ProductShowcase;