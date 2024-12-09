import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout.js';
import PartnershipSection from '../components/Bodypart.js';
import ProductShowcase from '../components/ProductShowcase.js';

const WebsiteLayout = () => {
  const [catalogUrl, setCatalogUrl] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCatalogUrl = async () => {
      try {
        const response = await fetch('/api/get-product-catalog');
        const data = await response.json();
        
        if (data.url) {
          setCatalogUrl(data.url);
        } else {
          // Fallback URL in case API fails
          setCatalogUrl('https://drive.google.com/file/d/11iH8UShgsg9jPllvIJntwPwZ2mmdJeSc/view?usp=sharing');
          console.warn('Failed to fetch catalog URL from API, using fallback URL');
        }
      } catch (error) {
        console.error('Error fetching catalog URL:', error);
        // Fallback URL in case of error
        setCatalogUrl('https://drive.google.com/file/d/11iH8UShgsg9jPllvIJntwPwZ2mmdJeSc/view?usp=sharing');
      } finally {
        setIsLoading(false);
      }
    };

    fetchCatalogUrl();
  }, []);

  return (
    <Layout>
      <div className="min-h-screen">
        <div className="container mx-auto px-4 sm:px-0">
          <PartnershipSection />
        </div>
        <div className="w-full border-t border-gray-100 mt-4 mb-12 lg:hidden"></div>
        <div className="container mx-auto px-4">
          <ProductShowcase />
        </div>
        {/* <div className="container mx-auto px-8 pb-8">
          {isLoading ? (
            <p className="text-xl text-teal-950 font-extralight">Loading...</p>
          ) : (
            <p className="text-xl text-teal-950 font-extralight text-wrap:pretty mb-8">
              You can download our{' '}
              <a 
                href={catalogUrl}
                target="_blank" 
                rel="noopener noreferrer" 
                className='text-green-50 transition-colors duration-300 hover:font-semibold hover:text-green-600'
              >
                product catalog
              </a>{' '}
              to learn about our full product line.
            </p>
          )}
        </div> */}
      </div>
    </Layout>
  );
};

export default WebsiteLayout;