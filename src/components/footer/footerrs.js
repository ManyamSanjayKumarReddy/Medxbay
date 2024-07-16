import React from 'react';
import { FaFacebookF, FaLinkedin, FaInstagram } from 'react-icons/fa';
import brand from '../Assets/brand-logo.png';
import './footerrs.css';
import medbrand from  '../Assets/medbrand.png'
const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="custom-footer-container">
        <div className="custom-footer-logo">
        <img className='gwaimage' src={medbrand} alt="Description of the image"/>

          <div className="custom-footer-socials">
          <div className="custom-social-icon">
              <a href="https://www.facebook.com/profile.php?id=61558154772271&mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
            </div>
            <div className="custom-social-icon">
              <a href="https://www.linkedin.com/company/medxbay/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
              </a>
            </div>
            <div className="custom-social-icon">
              <a href="https://www.instagram.com/medxbay?igsh=MWpiemdubG1ydHVv" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
  
      </div>
      <div className="custom-footer-bottom">
        <p className='rights-reserved'>© 2024 MedXBay. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
