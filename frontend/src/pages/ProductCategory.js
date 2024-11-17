import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/Layout.js';
import ProductSearch from '../components/ProductQuery.js';
import ProductCard from '../components/ProductCard.js';
import Breadcrumbs from '../components/Breadcrumbs.js';

const ProductCategoryPage = () => {
  const { category } = useParams();
  const [state, setState] = useState({
    products: [],
    isLoading: true,
    error: null
  });

  useEffect(() => {
    let isMounted = true;

    const fetchProducts = async () => {
      setState(prev => ({ ...prev, isLoading: true, error: null }));
      
      try {
        const fetchedProducts = await ProductSearch({ type: category });
        
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
  }, [category]);

  if (state.isLoading) {
    return (
      <Layout>
        <div className="container mx-auto px-10 lg:px-24 py-8 pb-16">
          <div className="h-6 w-48 bg-gray-200 rounded animate-pulse mb-6" /> {/* Breadcrumb skeleton */}
          <div className="h-12 w-3/4 bg-gray-200 rounded animate-pulse mb-8" /> {/* Title skeleton */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-4 animate-pulse">
                <div className="aspect-square bg-gray-200 rounded mb-4" /> {/* Image skeleton */}
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-3/4" /> {/* Title skeleton */}
                  <div className="h-3 bg-gray-200 rounded w-1/2" /> {/* Subtitle skeleton */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    );
  }

  if (state.error) {
    return (
      <Layout>
        <div className="container mx-auto px-10 lg:px-24 py-8 pb-16">
          <Breadcrumbs />
          <div className="mt-8 text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-md bg-red-50 text-red-700">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              {state.error}
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-10 lg:px-24 py-8 pb-16">
        <Breadcrumbs />
        <h1 className="text-6xl font-anek font-medium text-green-50 mb-8">{category} Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {state.products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProductCategoryPage;