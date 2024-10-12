import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactInfo = () => {
    return (
      <main className="flex-grow container">
        <h1 className="text-6xl font-anek font-medium text-green-50 mb-2">Contact Us</h1>

        <div className="bg-white p-6 mb-10 text-xl text-teal-950 font-extralight"> 

          {/* <h2 className="text-2xl font-semibold mb-4">Contact Information</h2> */}

          <div className="space-y-6 text-lg">

            <div className="flex items-start ">
              <MapPin className="mr-2 mt-1 text-gray-600" size={20} />
              <div className="space-y-3">
                <p className="font-medium">BayMeters LLC</p>
                <p>Corporate Commons</p>
                <p>6200 Stoneridge Mall Road, 3rd Floor</p>
                <p>Pleasanton, CA 94568</p>
              </div>
            </div>

            <div className="flex items-start">
              <Mail className="mr-2 mt-1 text-gray-600" size={20} />
              <div className="space-y-3">
                <p className="font-medium">Contact: Lake Cheng</p>
                <p>Email: lake@baymeters.com</p>
                <p>Phone: 971 895 0266</p>
              </div>
            </div>

            <div className="flex items-center">
              <Phone className="mr-2 text-gray-600" size={20} />
              <p className="font-medium"> Toll Free: 866 305 7799</p>
            </div>
          </div>

        </div>
      </main>
    );
}

export default ContactInfo;