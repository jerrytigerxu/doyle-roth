import React from 'react';

import Layout from '../components/layout';
import ContactForm from '../components/ContactForm';
import Footer from '../components/footer';

const ContactPage = ({ data }) => {

  return (
        <Layout>
          <ContactForm action="https://www.flexyform.com/f/d5aadbc542092fef05cd63b90a397b70cae3e56f"></ContactForm>
          <Footer />
        </Layout>


      );
}


export default ContactPage
