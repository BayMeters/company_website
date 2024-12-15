import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout.js';
import ProductSearch from '../components/ProductQuery.js';
import Breadcrumbs from '../components/Breadcrumbs.js';

// Separate components to improve readability
const LoadingSkeleton = () => (
  <div className="container mx-auto px-8 lg:px-24 py-8">
    <div className="h-6 w-48 bg-gray-200 rounded animate-pulse mb-6" />
    <div className="h-10 w-3/4 bg-gray-200 rounded animate-pulse mb-8" />
    <div className="flex flex-col md:flex-row gap-8 md:gap-16">
      <div className="w-full md:w-1/2 lg:w-2/5">
        <div className="aspect-square bg-gray-200 rounded animate-pulse" />
      </div>
      <div className="w-full md:w-1/2 lg:w-3/5 space-y-4">
        <div className="space-y-2">
          {[...Array(3)].map((_, i) => (
            <div key={i} className={`h-4 bg-gray-200 rounded animate-pulse w-${6 - i}/6`} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

const ErrorMessage = ({ message }) => (
  <div className="mt-8 text-center">
    <div className="inline-flex items-center px-4 py-2 rounded-md bg-red-50 text-red-700">
      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
      </svg>
      {message}
    </div>
  </div>
);

const ImageGallery = ({ photos, model, currentIndex, onPrev, onNext, onZoom }) => (
  <div className="w-full md:w-1/2 lg:w-2/5 relative rounded-md border border-gray-200 cursor-zoom-in" onClick={onZoom}>
    <div className="flex justify-center">
      <img 
        src={photos ? `/Pictures/${photos[currentIndex]}` : '/Assets/coming-soon.png'}
        alt={photos ? `${model} - Image ${currentIndex + 1}` : 'Coming Soon'} 
        className="w-full h-auto bg-white m-2"
      />
    </div>
    {photos?.length > 1 && (
      <div className="absolute inset-0 flex items-center justify-between p-4">
        {['prev', 'next'].map((direction) => (
          <button 
            key={direction}
            onClick={(e) => {
              e.stopPropagation();
              direction === 'prev' ? onPrev() : onNext();
            }} 
            className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity duration-300"
            aria-label={`${direction === 'prev' ? 'Previous' : 'Next'} image`}
          >
            {direction === 'prev' ? '‹' : '›'}
          </button>
        ))}
      </div>
    )}
  </div>
);

const ZoomModal = ({ isOpen, photos, currentIndex, model, onClose, onPrev, onNext }) => {
  if (!isOpen) return null;
  
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 cursor-zoom-out"
      onClick={onClose}
    >
      <div className="relative w-[90vw] h-[90vh] md:w-[70vw] flex items-center justify-center bg-white rounded-lg shadow-2xl">
        <img 
          src={`/Pictures/${photos[currentIndex]}`}
          alt={`${model} - Zoomed Image ${currentIndex + 1}`} 
          className="max-w-full max-h-full object-contain"
        />
        {photos?.length > 1 && (
          <>
            {['prev', 'next'].map((direction) => (
              <button 
                key={direction}
                onClick={(e) => {
                  e.stopPropagation();
                  direction === 'prev' ? onPrev() : onNext();
                }} 
                className={`absolute ${direction === 'prev' ? 'left-4' : 'right-4'} text-white text-2xl bg-black bg-opacity-50 rounded-full p-4 hover:bg-opacity-75 transition-opacity duration-300`}
                aria-label={`${direction === 'prev' ? 'Previous' : 'Next'} image`}
              >
                {direction === 'prev' ? '‹' : '›'}
              </button>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

const SingleProductPage = () => {
  const { category, model } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const fetchProduct = async () => {
      try {
        const fetchedProducts = await ProductSearch({ type: category, model });
        
        if (!isMounted) return;

        if (fetchedProducts.length > 0) {
          setProduct(fetchedProducts[0]);
        } else {
          setError('Product not found');
        }
      } catch (err) {
        if (isMounted) {
          setError('Failed to load product');
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchProduct();
    return () => { isMounted = false; };
  }, [category, model]);

  const handleImageNavigation = (direction) => {
    if (!product?.Photos?.length) return;
    
    setCurrentImageIndex(prevIndex => {
      const length = product.Photos.length;
      return direction === 'next' 
        ? (prevIndex + 1) % length
        : (prevIndex - 1 + length) % length;
    });
  };

  if (isLoading) return <Layout><LoadingSkeleton /></Layout>;
  if (error) return <Layout><ErrorMessage message={error} /></Layout>;
  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-8 lg:px-24 py-8">
          <Breadcrumbs />
          <div className="mt-8 text-center">
            <h2 className="text-2xl font-medium text-gray-900">Product Not Found</h2>
            <p className="mt-2 text-gray-500">We couldn't find a product matching your search criteria.</p>
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
          {product.Model}
        </h2>
        
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          <ImageGallery 
            photos={product.Photos}
            model={product.Model}
            currentIndex={currentImageIndex}
            onPrev={() => handleImageNavigation('prev')}
            onNext={() => handleImageNavigation('next')}
            onZoom={() => setIsZoomOpen(true)}
          />

          <div className="w-full md:w-1/2 lg:w-3/5">
            <p className="leading-relaxed text-lg sm:text-xl sm:leading-loose text-teal-950 font-extralight mb-4">
              {product.Description}
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-24 my-8 lg:my-16">
          {['Key_Features', 'Applications'].map((section) => (
            <div key={section} className="flex-1">
              <h2 className="text-3xl sm:text-4xl font-anek font-medium text-green-50 mb-4">
                {section.replace('_', ' ')}
              </h2>
              <ul className="list-disc pl-5 text-base sm:text-lg text-teal-950 font-extralight">
                {product[section].map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <ZoomModal 
        isOpen={isZoomOpen}
        photos={product.Photos}
        currentIndex={currentImageIndex}
        model={product.Model}
        onClose={(e) => e.target === e.currentTarget && setIsZoomOpen(false)}
        onPrev={() => handleImageNavigation('prev')}
        onNext={() => handleImageNavigation('next')}
      />
    </Layout>
  );
};

export default SingleProductPage;