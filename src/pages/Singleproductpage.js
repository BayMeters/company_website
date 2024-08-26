import React from 'react';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';

const WebsiteLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <h1 className="text-4xl text-center font-bold text-gray-900 p-8">
            Single Product page
        </h1>
      </main>
      <Footer/>
    </div>
  );
};

export default WebsiteLayout;