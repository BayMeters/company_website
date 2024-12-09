import React from 'react';
import Layout from '../components/Layout.js';

const AboutPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-6 sm:px-8 lg:px-16 py-16 max-w-6xl">
        <section className="mb-6">
          <h2 className="text-6xl font-anek font-medium text-green-50 mb-2">About Us</h2>
          <div className="bg-white p-8 text-xl text-teal-950 font-extralight">
            <p className="mb-6 leading-relaxed">
              <strong>BayMeters LLC</strong>, based in California’s Bay Area, specializes in providing high-quality process automation products and solutions. By integrating world-class supply chains with cutting-edge cloud and IoT technologies, we deliver reliable and innovative solutions to our clients.
            </p>
            <p className="mb-6 leading-relaxed">
              As the North American representative for <strong>Supmea</strong>, one of the industry's fastest-growing companies, BayMeters offers a wide range of instruments for flow, level, analysis, pressure, and temperature. Our mission is to better serve Supmea's customers and partners across the USA and Canada, ensuring local support and enhanced service.
            </p>
          </div>
        </section>
        
        {/* <div className='flex-row gap-12'>
          <h2 className="text-6xl font-anek font-medium text-green-50 mb-2">About Supmea</h2>
          <div className="bg-white p-8 text-xl text-teal-950 font-extralight">
            <p className="mb-6 leading-relaxed">
              Founded in 2006, <a href="http://us.supmea.com" target="_blank" rel="noopener noreferrer" className="hover:underline font-normal">Supmea Automation</a> is a leading high-tech enterprise specializing in process automation instruments. With nearly 600 employees and annual revenues exceeding $100 million USD, Supmea is a key player in China's automation industry, serving clients in over 130 countries worldwide.
            </p>
            <p className="mb-6 leading-relaxed">
              Supmea is renowned for its advanced electromagnetic flowmeter calibration system and robust research and development capabilities. The company offers a full range of instruments for flow, level, analytical measurement, pressure, and temperature, serving industries such as water and wastewater, energy, chemicals, life sciences, and food and beverage.
            </p>
          </div>
        </div> */}
      </div>
    </Layout>
  );
};

export default AboutPage;
