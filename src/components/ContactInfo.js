import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactInfo = () => {
    return (
      <main className="flex-grow container -mx-10 py-8">
        <h1 className="text-3xl font-anek font-semibold ">Contact Us</h1>
        <div className="bg-white p-6 mb-10">

          {/* <h2 className="text-2xl font-semibold mb-4">Contact Information</h2> */}

          <div className="space-y-6 text-lg">

            <div className="flex items-start ">
              <MapPin className="mr-2 mt-1 text-gray-600" size={20} />
              <div className="space-y-3">
                <p className="font-semibold">BayMeters LLC</p>
                <p>Corporate Commons</p>
                <p>6200 Stoneridge Mall Road, 3rd Floor</p>
                <p>Pleasanton, CA 94568</p>
              </div>
            </div>

            <div className="flex items-start">
              <Mail className="mr-2 mt-1 text-gray-600" size={20} />
              <div className="space-y-3">
                <p className="font-semibold">Contact: Lake Cheng</p>
                <p>Email: lake@baymeters.com</p>
                <p>Phone: 971 895 0266</p>
              </div>
            </div>

            <div className="flex items-center">
              <Phone className="mr-2 text-gray-600" size={20} />
              <p className="font-semibold"> Toll Free: 866 305 7799</p>
            </div>
          </div>

        </div>
      </main>
    );
}

export default ContactInfo;