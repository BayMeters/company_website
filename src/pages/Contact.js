import React from 'react';
import Layout from '../components/Layout.js';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';

const ContactPage = () => {
  return (
    <Layout>
      <div className="flex-row lg:flex justify-between items-start mx-10 gap-10">
        <div className="flex-auto max-w-1/2 mx-1 ">
          <ContactInfo />
        </div>
        <div className="flex-auto min-w-96 max-w-1/2 mx-1">
          <ContactForm />
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;