import React from 'react';
import Layout from '../components/Layout.js';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';

const ContactPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-8 py-12 mb-12 mt-10">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16">
          <div className="w-full lg:w-1/2 max-w-md">
            <ContactInfo />
          </div>
          <div className="w-full lg:w-1/2 max-w-md">
            <ContactForm />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;