import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className='footer-section-container'>
      <div className='footer-container'>
        <div className='footer-div-links'>
          <h4>Links</h4>
          <p>Social Media</p>
          <p>Contact</p>
        </div>
        <div className='footer-links-company'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className='footer-links-info'>
          <h4>Get in touch</h4>
          <p>jl.Mangukusuma No.32 Bandung</p>
          <p>085-574347</p>
          <p>info@courseme.net</p>
        </div>
      </div>
      <div className='footer-cpyrght'>
        <p>@2022 mid-project. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
