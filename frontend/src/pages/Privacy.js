import React from 'react';
import Layout from '../components/Layout.js';
import { Link } from 'react-router-dom';

const WebsiteLayout = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Privacy Notice</h1>
        <p className="text-sm text-gray-600 mb-8"><strong>Last updated: September 1st, 2024</strong></p>

        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <p className="text-gray-700 leading-relaxed">
            This Privacy Notice describes how <strong>BayMeters LLC</strong> ("we," "our," or "us") collects, stores, uses, and discloses your personal information through our website, services, and other interactions with our business (collectively, "Services"). This includes our marketing, sales, and customer support activities.
          </p>
        </div>

        {[
          { title: "1. Information We Collect", content: "We collect personal information such as your name, email address, phone number, and shipping address when you interact with our website or purchase our products. This includes when you inquire about our products, sign up for our services, or make a purchase. Additionally, we automatically collect certain information through cookies to optimize your experience on our website, including your IP address, browser type, and site usage data." },
          { title: "2. How We Use Your Information", content: (
            <>
              <p>We use the information collected to:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Provide and improve our products and services.</li>
                <li>Process and fulfill orders, including shipping and logistics.</li>
                <li>Respond to your inquiries and provide customer support.</li>
                <li>Ensure compliance with legal obligations.</li>
                <li>Maintain communication for service updates and support.</li>
                <li>Send updates and promotional material with your consent.</li>
                <li>Store contact details for ongoing customer communication and relationship management.</li>
              </ul>
            </>
          )},
          { title: "3. How We Share Your Information", content: "We do not sell personal information. However, we may share your information with trusted third parties, such as shipping providers and service partners, when necessary to fulfill orders. For instance, if we ship products from overseas factories, we may need to provide your shipping address and contact details to ensure delivery. We also share data with service providers who assist us with processing payments, maintaining our IT infrastructure, and delivering marketing communications, all while adhering to confidentiality obligations." },
          { title: "4. International Data Transfers", content: "When necessary, we may transfer your information to countries outside your residence, including for the purpose of order fulfillment through our overseas manufacturing partners. We ensure that any international transfer is in compliance with applicable laws, and we take measures to safeguard your personal data during these transfers." },
          { title: "5. Your Choices and Rights", content: "You have the right to access, update, or delete your personal information at any time. Additionally, you may opt out of receiving marketing communications by following the instructions in those communications or contacting us directly." },
          { title: "6. Data Retention and Deletion", content: "We retain your personal information for as long as necessary to fulfill our business purposes or to comply with legal obligations. Your data will be securely deleted or anonymized when no longer required." },
          { title: "7. Updates to this Notice", content: "We may periodically update this Privacy Notice. The \"Last updated\" date will be revised accordingly." },
          { title: "8. Contact Us", content: (
            <p>
              If you have any privacy-related inquiries, please <Link to='/contact' className="text-blue-600 hover:underline">contact us</Link> via our website or email at <a href="mailto:lake@baymeters.com" className="text-blue-600 hover:underline">lake@baymeters.com</a>.
            </p>
          )}
        ].map((section, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-xl font-semibold mb-3 text-gray-800">{section.title}</h2>
            <div className="bg-gray-50 rounded-lg p-4">
              {typeof section.content === 'string' ? (
                <p className="text-gray-700 leading-relaxed">{section.content}</p>
              ) : (
                section.content
              )}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default WebsiteLayout;