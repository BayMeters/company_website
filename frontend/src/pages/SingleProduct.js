import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout.js';
import ProductSearch from '../components/ProductQuery.js';
import Breadcrumbs from '../components/Breadcrumbs.js';

const SingleProductPage = () => {
  const { category, model } = useParams();
  const [product, setProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
      <div className="container mx-auto sm:px-8 lg:px-24 py-8">
        <Breadcrumbs /> 
        <h2 className="text-5xl font-anek font-medium text-green-50 mb-10">{product.Model}</h2>
        <div className="flex-row">

          <div className='flex gap-16'>
            {/* Image Gallery */}
            <div className="relative min-w-96 h-full rounded-md border border-gray-200">
              {product.Photos && product.Photos.length > 0 ? (
                <>
                  <div className="flex justify-center ">
                    <img 
                      src={`/Pictures/${product.Photos[currentImageIndex]}`}
                      alt={`${product.Model} - Image ${currentImageIndex + 1}`} 
                      className="w-5/6 h-auto bg-white m-2"
                    />
                  </div>
                  {product.Photos.length > 1 && (
                    <div className="absolute inset-0 flex items-center justify-between m-4">
                      <button 
                        onClick={prevImage} 
                        className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity duration-300"
                      >
                        &#8249; {/* Left arrow symbol */}
                      </button>
                      <button 
                        onClick={nextImage} 
                        className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity duration-300"
                      >
                        &#8250; {/* Right arrow symbol */}
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <div className="flex justify-center items-center h-full">
                 <img src='/Assets/coming-soon.png' alt='Coming Soon' className="w-5/6 h-auto bg-white m-2" />
                </div>
              )}
            </div>
            {/* Product Description */}
            <p className="leading-relaxed text-xl text-teal-950 font-extralight mb-4">{product.Description}</p>
          </div>
          

          <div className='flex flex-col md:flex-row gap-24 my-16'>
            <div className="flex-1">
              <h2 className="text-4xl font-anek font-medium text-green-50 mb-4">Key Features</h2>
              <ul className="list-disc pl-5 text-lg text-teal-950 font-extralight">
                {product.Key_Features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className='flex-1'>
              <h2 className="text-4xl font-anek font-medium text-green-50 mb-4">Applications</h2>
              <ul className="list-disc pl-5 text-lg text-teal-950 font-extralight">
                {product.Applications.map((application, index) => (
                  <li key={index}>{application}</li>
                ))}
              </ul>
            </div>            
          </div>
          
        </div>
      </div> 
    </Layout>
  );
};

export default SingleProductPage;