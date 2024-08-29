import React from 'react';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import { MapPin, Phone, Mail } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <div className="bg-white shadow-lg rounded-lg p-6 mb-10">

          {/* <h2 className="text-2xl font-semibold mb-4">Contact Information</h2> */}

          <div className="space-y-4">

            <div className="flex items-start">
              <MapPin className="mr-2 mt-1 text-gray-600" size={20} />
              <div>
                <p className="font-semibold">BayMeters LLC</p>
                <p>Corporate Commons</p>
                <p>6200 Stoneridge Mall Road, 3rd Floor</p>
                <p>Pleasanton, CA 94568</p>
              </div>
            </div>

            

            <div className="flex items-start">
              <Mail className="mr-2 mt-1 text-gray-600" size={20} />
              <div>
                <p className="font-semibold">Contact: Lake Cheng</p>
                <p>Email: lake@baymeters.com</p>
                <p>Phone: 971 895 0266</p>
              </div>
            </div>

            <div className="flex items-center">
              <Phone className="mr-2 text-gray-600" size={20} />
              <p>Toll Free: 866 305 7799</p>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;