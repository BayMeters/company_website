import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout.js';
import PartnershipSection from '../components/Bodypart.js';
import ProductShowcase from '../components/ProductShowcase.js';
import { motion } from 'framer-motion'; // You'll need to install framer-motion

const WebsiteLayout = () => {
  const [catalogUrl, setCatalogUrl] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const fetchCatalogUrl = async () => {
      try {
        const response = await fetch('/api/get-product-catalog');
        const data = await response.json();
        if (data.url) {
          setCatalogUrl(data.url);
        } else {
          setCatalogUrl('https://drive.google.com/file/d/11iH8UShgsg9jPllvIJntwPwZ2mmdJeSc/view?usp=sharing');
          console.warn('Failed to fetch catalog URL from API, using fallback URL');
        }
      } catch (error) {
        console.error('Error fetching catalog URL:', error);
        setCatalogUrl('https://drive.google.com/file/d/11iH8UShgsg9jPllvIJntwPwZ2mmdJeSc/view?usp=sharing');
      } finally {
        setIsLoading(false);
        // Trigger animation after content loads
        setIsVisible(true);
      }
    };
    fetchCatalogUrl();
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { 
      opacity: 0,
      y: -50,
      filter: 'blur(5px)'
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        delayChildren: 0.4,
        staggerChildren: 0.4,
        ease: 'easeInOut'
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: +50,
      filter: 'blur(5px)'
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: 'easeInOut'
      }
    }
  };

  return (
    
      <motion.div 
        className="min-h-screen"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
      >
        
      <Layout>

        <div className="container mx-auto px-4 sm:px-0 pb-8">
          <motion.div variants={itemVariants}>
            <PartnershipSection />
          </motion.div>
        </div>
        
        <div className="w-full border-t border-gray-100 mt-4 mb-12 lg:hidden"></div>
        
        <div className="container mx-auto px-4">
          <motion.div variants={itemVariants}>
            <ProductShowcase />
          </motion.div>
        </div>

        <div className="container mx-auto px-8 pb-8">
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
        </div>
        </Layout>
      </motion.div>
  );
};

export default WebsiteLayout;