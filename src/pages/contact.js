import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import './contact.css';

const Contact = ({location}) => (
  <Layout location={location}>
    <SEO title="OT for That - Contact Me" />
    <div id="contact-form">
      <h1>Contact Me:</h1>
      <form method="POST" name="contact" data-netlify="true">
          {/* <div className="hidden"><label>Are you human? <input name="bot-field" /></label></div> */}
          <label htmlFor="name">Your Name:</label>
          <input type="text" name="name" required/>
          <label htmlFor="email">Your Email:</label>
          <input type="text" name="email" required/>
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="15" required></textarea>
          <button type="submit">Send</button>
      </form>
    </div>
  </Layout>
)

export default Contact;