import React from 'react';
import Layout from '../components/Layout.js';

const AboutPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-6 sm:px-8 lg:px-16 py-16 max-w-6xl">
        {/* <h1 className="text-4xl font-bold mb-12 text-teal-900 border-b-2 border-teal-200 pb-4">About Us</h1> */}
        
        <section className="mb-6">
          <h2 className="text-6xl font-anek font-medium text-green-50 mb-2">About Baymeters LLC</h2>
          <div className="bg-white p-8 text-xl text-teal-950 font-extralight">
            <p className="mb-6 leading-relaxed">
              {/* <a href="/" target="_blank" rel="noopener noreferrer" className="hover:underline font-normal">Baymeters LLC</a> */}
              Located in California’s Bay Area, BayMeters LLC is dedicated to providing high-quality process automation products and innovative solutions. We specialize in integrating world-class supply chains with advanced cloud and IoT technologies to meet the needs of our customers.

            </p>
            <p className="mb-6 leading-relaxed">
              {/* BayMeters proudly serves as the exclusive North American representative for <a href="https://www.supmeaauto.com" target="_blank" rel="noopener noreferrer" className="hover:underline font-normal">Supmea</a>, a leading instrumentation company from China. Additionally, we are the exclusive representative for select <a href="https://www.bakerhughes.com/druck" target="_blank" rel="noopener noreferrer" className="hover:underline font-normal">Druck</a> pressure instruments across North America. */}
              As the exclusive North American representative for <strong>Supmea</strong>, one of the industry’s fastest-growing companies, BayMeters offers a wide range of instruments for flow, level, analysis, pressure, and temperature. Our products serve various sectors, including water and wastewater, agriculture, and food and beverage industries.
            </p>
            <p className="mb-6 leading-relaxed">
            Additionally, BayMeters is the exclusive North American representative for select <strong>Druck</strong> pressure instruments, further expanding our portfolio of reliable solutions for customers across diverse industries.
            </p>
          </div>
        </section>
        
        {/* <div className='flex-row gap-12'>
        <h2 className="text-6xl font-anek font-medium text-green-50 mb-2">About Supmea</h2>

          <div className='flex'>
            <div className="hidden lg:block flex-auto min-w-52">
              <img
                src={Supmea}
                alt="Supmea"
                className="mt-10 w-auto h-auto mb-2"
              />
            </div>
            
            <div className="bg-white p-8 text-xl text-teal-950 font-extralight">
              <p className="mb-6 leading-relaxed">
                Founded in 2006, <a href="https://www.supmeaauto.com" target="_blank" rel="noopener noreferrer" className="hover:underline font-normal">Supmea Automation</a>. is a high-tech enterprise specializing in process automation instruments. With nearly 600 employees and an annual revenue exceeding $100 million USD, Supmea is one of the fastest-growing companies in the industry, serving over 130 countries.
              </p>
              <p className="mb-6 leading-relaxed">
                The company features an advanced electromagnetic flowmeter calibration system and strong R&D capabilities, partnering with industry leaders like Druck and Jumo. Supmea offers a comprehensive range of products, including instruments for flow, level, analysis, pressure, and temperature, used across various industries such as water and wastewater, energy, chemicals, life sciences, and food and beverage.
              </p>
            </div>
            
          </div>
        </div> */}
      </div>
    </Layout>
  );
};

export default AboutPage;