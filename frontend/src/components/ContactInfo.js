import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactInfo = () => {
    return (
      <main className="flex-grow container">
        <h1 className="text-6xl font-anek font-medium text-green-50 mb-5">Contact Us</h1>

        <div className="bg-white mb-10 text-xl text-teal-950 font-extralight"> 

          {/* <h2 className="text-2xl font-semibold mb-4">Contact Information</h2> */}

          <div className="space-y-6 text-lg">

            <div className="flex-col items-start p-4 space-y-3 bg-light-100">
                <p className="text-2xl font-medium font-anek text-teal-800">BayMeters LLC</p>
                <div className="flex items-start">
                  <MapPin className="mr-2 mt-1 text-gray-600" size={20} />
                  <div className='text-base text-teal-950 font-light'>
                    <p>160 E Tasman Drive</p>
                    <p>San Jose, CA 95134</p>
                  </div> 
                </div>
                <div className="flex items-center">
                  <Phone className="mr-2 text-gray-600" size={20} />
                  <p className="text-base text-teal-950 font-light">+1 (866) 305-7799</p>
                </div>
            </div>

            <div className="flex-col items-start p-4 space-y-3 bg-light-100">
              <p className="text-2xl font-medium font-anek text-teal-800 mb-2">Lake Cheng</p>
              <div className="flex items-center">
                <Mail className="mr-2 text-gray-600" size={20} />
                <p className="text-base text-teal-950 font-light">lake@baymeters.com</p>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2 text-gray-600" size={20} />
                <p className="text-base text-teal-950 font-light">+1 (971) 895-0266</p>
              </div>
            </div>

            
          </div>

        </div>
      </main>
    );
}

export default ContactInfo;