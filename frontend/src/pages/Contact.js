import React from 'react';
import Layout from '../components/Layout.js';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';

const ContactPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-8 py-12 mb-12 mt-10">
        {/* <h1 className="text-6xl font-anek font-medium text-green-50 mb-2">Contact Us</h1> */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-4 lg:gap-16">
          <div className="w-full lg:w-1/2 max-w-md">
            <ContactInfo />
          </div>
          <div className="w-full lg:w-1/2 max-w-md lg:mt-20">
            <ContactForm />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;