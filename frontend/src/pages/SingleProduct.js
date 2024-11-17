import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout.js';
import ProductSearch from '../components/ProductQuery.js';
import Breadcrumbs from '../components/Breadcrumbs.js';

const SingleProductPage = () => {
  const { category, model } = useParams();
  const [state, setState] = useState({
    product: null,
    isLoading: true,
    error: null
  });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const fetchProduct = async () => {
      setState(prev => ({ ...prev, isLoading: true, error: null }));
      
      try {
        const fetchedProducts = await ProductSearch({ type: category, model: model });
        
        if (isMounted) {
          if (fetchedProducts.length > 0) {
            setState({
              product: fetchedProducts[0],
              isLoading: false,
              error: null
            });
          } else {
            setState({
              product: null,
              isLoading: false,
              error: 'Product not found'
            });
          }
        }
      } catch (err) {
        if (isMounted) {
          setState({
            product: null,
            isLoading: false,
            error: 'Failed to load product'
          });
        }
      }
    };

    fetchProduct();

    return () => {
      isMounted = false;
    };
  }, [category, model]);

  const nextImage = useCallback(() => {
    if (!state.product?.Photos?.length) return;
    setCurrentImageIndex(prevIndex => 
      (prevIndex + 1) % state.product.Photos.length
    );
  }, [state.product]);

  const prevImage = useCallback(() => {
    if (!state.product?.Photos?.length) return;
    setCurrentImageIndex(prevIndex => 
      (prevIndex - 1 + state.product.Photos.length) % state.product.Photos.length
    );
  }, [state.product]);

  const toggleZoom = useCallback(() => {
    setIsZoomOpen(prev => !prev);
  }, []);

  const handleOutsideClick = useCallback((e) => {
    if (e.target === e.currentTarget) {
      toggleZoom();
    }
  }, [toggleZoom]);

  if (state.isLoading) {
    return (
      <Layout>
        <div className="container mx-auto px-8 lg:px-24 py-8">
          <div className="h-6 w-48 bg-gray-200 rounded animate-pulse mb-6" /> {/* Breadcrumb skeleton */}
          <div className="h-10 w-3/4 bg-gray-200 rounded animate-pulse mb-8" /> {/* Title skeleton */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            {/* Image skeleton */}
            <div className="w-full md:w-1/2 lg:w-2/5">
              <div className="aspect-square bg-gray-200 rounded animate-pulse" />
            </div>
            
            {/* Content skeleton */}
            <div className="w-full md:w-1/2 lg:w-3/5 space-y-4">
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded animate-pulse" />
                <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6" />
                <div className="h-4 bg-gray-200 rounded animate-pulse w-4/6" />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (state.error) {
    return (
      <Layout>
        <div className="container mx-auto px-8 lg:px-24 py-8">
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

  if (!state.product) {
    return (
      <Layout>
        <div className="container mx-auto px-8 lg:px-24 py-8">
          <Breadcrumbs />
          <div className="mt-8 text-center">
            <h2 className="text-2xl font-medium text-gray-900">Product Not Found</h2>
            <p className="mt-2 text-gray-500">
              We couldn't find a product matching your search criteria.
            </p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-8 lg:px-24 py-8">
        <Breadcrumbs />
        <h2 className="text-4xl sm:text-5xl font-anek font-medium text-green-50 mb-6 sm:mb-10">
          {state.product.Model}
        </h2>
        
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          {/* Image Gallery */}
          <div 
            className="w-full md:w-1/2 lg:w-2/5 relative rounded-md border border-gray-200 cursor-zoom-in" 
            onClick={toggleZoom}
          >
            {state.product.Photos && state.product.Photos.length > 0 ? (
              <>
                <div className="flex justify-center">
                  <img 
                    src={`/Pictures/${state.product.Photos[currentImageIndex]}`}
                    alt={`${state.product.Model} - Image ${currentImageIndex + 1}`} 
                    className="w-full h-auto bg-white m-2 cursor-zoom-in"
                  />
                </div>
                {state.product.Photos.length > 1 && (
                  <div className="absolute inset-0 flex items-center justify-between p-4">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        prevImage();
                      }} 
                      className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity duration-300"
                      aria-label="Previous image"
                    >
                      &#8249;
                    </button>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        nextImage();
                      }} 
                      className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity duration-300"
                      aria-label="Next image"
                    >
                      &#8250;
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="flex justify-center items-center h-full">
                <img 
                  src='/Assets/coming-soon.png' 
                  alt='Coming Soon' 
                  className="w-full h-auto bg-white m-2" 
                />
              </div>
            )}
          </div>

          {/* Product Description */}
          <div className="w-full md:w-1/2 lg:w-3/5">
            <p className="leading-relaxed text-lg sm:text-xl text-teal-950 font-extralight mb-4">
              {state.product.Description}
            </p>
          </div>
        </div>

        <div className='flex flex-col lg:flex-row gap-8 lg:gap-24 my-8 lg:my-16'>
          {/* Key Features */}
          <div className="flex-1">
            <h2 className="text-3xl sm:text-4xl font-anek font-medium text-green-50 mb-4">
              Key Features
            </h2>
            <ul className="list-disc pl-5 text-base sm:text-lg text-teal-950 font-extralight">
              {state.product.Key_Features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          {/* Applications */}
          <div className='flex-1'>
            <h2 className="text-3xl sm:text-4xl font-anek font-medium text-green-50 mb-4">
              Applications
            </h2>
            <ul className="list-disc pl-5 text-base sm:text-lg text-teal-950 font-extralight">
              {state.product.Applications.map((application, index) => (
                <li key={index}>{application}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Zoom Modal */}
      {isZoomOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 cursor-zoom-out"
          onClick={handleOutsideClick}
        >
          <div 
            className="relative w-[90vw] h-[90vh] md:w-[70vw] flex items-center justify-center bg-white rounded-lg shadow-2xl"
          >
            <img 
              src={`/Pictures/${state.product.Photos[currentImageIndex]}`}
              alt={`${state.product.Model} - Zoomed Image ${currentImageIndex + 1}`} 
              className="max-w-full max-h-full object-contain"
            />

            {state.product.Photos?.length > 1 && (
              <>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }} 
                  className="absolute left-4 text-white text-2xl bg-black bg-opacity-50 rounded-full p-4 hover:bg-opacity-75 transition-opacity duration-300"
                  aria-label="Previous image"
                >
                  &#8249;
                </button>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }} 
                  className="absolute right-4 text-white text-2xl bg-black bg-opacity-50 rounded-full p-4 hover:bg-opacity-75 transition-opacity duration-300"
                  aria-label="Next image"
                >
                  &#8250;
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </Layout>
  );
};

export default SingleProductPage;