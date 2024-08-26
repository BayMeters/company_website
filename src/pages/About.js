import React from 'react';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import Supmea from '../Assets/Supmea.jpg';

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-8 pt-4 pb-10">

          <h1 className="text-3xl font-bold mb-6">About Us</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Baymeters LLC</h2>
            <p className="mb-4">
              <strong>Baymeters LLC</strong>, located in California's Bay Area, is dedicated to providing high-quality products and solutions in the field of process automation. We achieve this by integrating the world's best supply chains with cloud and IoT technologies.
            </p>
            <p className="mb-4">
              Baymeters is the exclusive North American representative of <a href="https://www.supmeaauto.com" target="_blank" rel="noopener noreferrer" className='hover:underline'><strong>Supmea</strong></a>, 
              one of China's leading instrumentation companies. We are also the exclusive representative for select <a href="https://www.bakerhughes.com/druck" target="_blank" rel="noopener noreferrer" className='hover:underline'><strong>Druck</strong></a> pressure instruments in North America.
            </p>
          </section>

            <div className='flex gap-8'>
                <img src={Supmea} alt="Supmea" className="mt-2 w-auto h-auto mb-2 flex-auto hidden lg:block" />
                <section className='flex-auto'>
                    <h2 className="text-2xl font-semibold mb-4">About Supmea</h2>
                    <p className="mb-4">
                    Founded in 2006, Supmea Automation is a high-tech enterprise specializing in the research, development, manufacturing, and service of process automation instruments. With nearly 500 employees and an annual business scale exceeding $100 million USD, Supmea is one of the fastest-growing companies in the industry, serving customers in over 130 countries worldwide.
                    </p>
                    <p className="mb-4">
                    The company boasts an advanced electromagnetic flowmeter calibration system and strong R&D capabilities, with deep collaborations with industry leaders such as Druck and Jumo. Supmea's comprehensive product range includes instruments for flow, level, analysis, pressure and temperature, which are widely used across diverse industries including water and wastewater, energy and power, chemicals, life sciences, and food and beverage.
                    </p>
                </section>
            </div>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;