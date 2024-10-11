import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout.js';
import ProductSearch from '../components/ProductQuery.js';
import Breadcrumbs from '../components/Breadcrumbs.js';

const SingleProductPage = () => {
  const { category, model } = useParams();
  const [product, setProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  useEffect(() => {
    const fetchedProducts = ProductSearch({ type: category, model: model });
    if (fetchedProducts.length > 0) {
      setProduct(fetchedProducts[0]);
    }
  }, [category, model]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % product.Photos.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex - 1 + product.Photos.length) % product.Photos.length
    );
  };

  const toggleZoom = () => {
    setIsZoomOpen(!isZoomOpen);
  };

  const handleOutsideClick = useCallback((e) => {
    if (e.target === e.currentTarget) {
      toggleZoom();
    }
  }, [toggleZoom]);

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <p>Loading...</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-8 lg:px-24 py-8">
        <Breadcrumbs /> 
        <h2 className="text-4xl sm:text-5xl font-anek font-medium text-green-50 mb-6 sm:mb-10">{product.Model}</h2>
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          
          {/* Image Gallery */}
          <div className="w-full md:w-1/2 lg:w-2/5 relative rounded-md border border-gray-200 cursor-zoom-in" onClick={toggleZoom}>
            {product.Photos && product.Photos.length > 0 ? (
              <>
                <div className="flex justify-center">
                  <img 
                    src={`/Pictures/${product.Photos[currentImageIndex]}`}
                    alt={`${product.Model} - Image ${currentImageIndex + 1}`} 
                    className="w-full h-auto bg-white m-2 cursor-zoom-in"
                  />
                </div>
                {product.Photos.length > 1 && (
                  <div className="absolute inset-0 flex items-center justify-between m-4">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        prevImage();
                      }} 
                      className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity duration-300"
                    >
                      &#8249;
                    </button>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        prevImage();
                      }} 
                      className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity duration-300"
                    >
                      &#8250;
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="flex justify-center items-center h-full">
               <img src='/Assets/coming-soon.png' alt='Coming Soon' className="w-full h-auto bg-white m-2" />
              </div>
            )}
          </div>

          {/* Product Description */}
          <div className="w-full md:w-1/2 lg:w-3/5">
            <p className="leading-relaxed text-lg sm:text-xl text-teal-950 font-extralight mb-4">{product.Description}</p>
          </div>
        </div>
        

        <div className='flex flex-col lg:flex-row gap-8 lg:gap-24 my-8 lg:my-16'>
          <div className="flex-1">
            <h2 className="text-3xl sm:text-4xl font-anek font-medium text-green-50 mb-4">Key Features</h2>
            <ul className="list-disc pl-5 text-base sm:text-lg text-teal-950 font-extralight">
              {product.Key_Features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className='flex-1'>
            <h2 className="text-3xl sm:text-4xl font-anek font-medium text-green-50 mb-4">Applications</h2>
            <ul className="list-disc pl-5 text-base sm:text-lg text-teal-950 font-extralight">
              {product.Applications.map((application, index) => (
                <li key={index}>{application}</li>
              ))}
            </ul>
          </div>            
        </div>
        
      </div> 

      {/* Custom Zoom Modal */}
      {isZoomOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 cursor-zoom-out"
          onClick={handleOutsideClick}
        >
          <div 
            className="relative w-[90vw] h-[90vh] md:w-[70vw] flex items-center justify-center bg-white rounded-lg shadow-2xl"
            onClick={toggleZoom}
          >
            <img 
              src={`/Pictures/${product.Photos[currentImageIndex]}`}
              alt={`${product.Model} - Zoomed Image ${currentImageIndex + 1}`} 
              className="max-w-full max-h-full object-contain"
            />

            {product.Photos.length > 1 && (
              <>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }} 
                  className="absolute left-4 text-white text-2xl bg-black bg-opacity-50 rounded-full p-4 py-6 hover:bg-opacity-75 transition-opacity duration-300"
                >
                  &#8249;
                </button>

                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }} 
                  className="absolute right-4 text-white text-2xl bg-black bg-opacity-50 rounded-full p-4 py-6 hover:bg-opacity-75 transition-opacity duration-300"
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

export default SingleProductPage
