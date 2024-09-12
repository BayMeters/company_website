import React from 'react';
import Layout from '../components/Layout.js';
import Supmea from '../Assets/Supmea.jpg';

const AboutPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-8 pt-4 pb-10">

        <h1 className="text-3xl font-bold mb-6">About Us</h1>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Baymeters LLC</h2>
          <p className="mb-4">
            <strong>Baymeters LLC</strong>, based in California’s Bay Area, specializes in delivering top-quality process automation products and solutions. We seamlessly integrate world-class supply chains with cutting-edge cloud and IoT technologies.
          </p>
          <p className="mb-4">
            BayMeters proudly serves as the exclusive North American representative for <a href="https://www.supmeaauto.com" target="_blank" rel="noopener noreferrer" className='hover:underline'><strong>Supmea</strong></a>,
            a leading instrumentation company from China. Additionally, we are the exclusive representative for select <a href="https://www.bakerhughes.com/druck" target="_blank" rel="noopener noreferrer" className='hover:underline'><strong>Druck</strong></a> pressure instruments across North America.
          </p>
        </div>

        <div className='flex gap-8'>

          <div className="hidden lg:block flex-auto min-w-52">
            <img 
              src={Supmea} 
              alt="Supmea" 
              className="mt-4 w-auto h-auto mb-2"
            />
          </div>

          <div className='flex-auto'>
            <h2 className="text-2xl font-semibold mb-4">About Supmea</h2>
            <p className="mb-4">
              Founded in 2006, Supmea Automation is a high-tech enterprise specializing in process automation instruments. With nearly 600 employees and an annual revenue exceeding $100 million USD, Supmea is one of the fastest-growing companies in the industry, serving over 130 countries.
            </p>
            <p className="mb-4">
              The company features an advanced electromagnetic flowmeter calibration system and strong R&D capabilities, partnering with industry leaders like Druck and Jumo. Supmea offers a comprehensive range of products, including instruments for flow, level, analysis, pressure, and temperature, used across various industries such as water and wastewater, energy, chemicals, life sciences, and food and beverage.
            </p>
          </div>

        </div>

      </div>
    </Layout>
  );
};

export default AboutPage;