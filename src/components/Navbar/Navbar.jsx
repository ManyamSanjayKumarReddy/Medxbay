import React, { useState, useEffect, useRef } from 'react';


import './navbar.css';

import SignupCard from '../signup/signup';
import LoginCard from '../login/login';
import medbrand from  '../Assets/medbrand.png'
import Midpopup from '../../Midpopup';



const Navbar = () => {
  const [isSignInClicked, setIsSignInClicked] = useState(false);
  const [isRegisterClicked, setIsRegisterClicked] = useState(false);
  const [isCorporateDropdownOpen, setCorporateDropdownOpen] = useState(false);
  const [isProvidersDropdownOpen, setProvidersDropdownOpen] = useState(false);

  const corporateDropdownRef = useRef(null);
  const providersDropdownRef = useRef(null);

  const toggleCorporateDropdown = () => setCorporateDropdownOpen(!isCorporateDropdownOpen);
  const toggleProvidersDropdown = () => setProvidersDropdownOpen(!isProvidersDropdownOpen);
  const [showPopup, setShowPopup] = useState(false);

  const handleShowPopup = () => setShowPopup(true);
  const handleClosePopup = () => setShowPopup(false);
  const handleClickOutside = (event) => {
    if (corporateDropdownRef.current && !corporateDropdownRef.current.contains(event.target)) {
      setCorporateDropdownOpen(false);
    }
    if (providersDropdownRef.current && !providersDropdownRef.current.contains(event.target)) {
      setProvidersDropdownOpen(false);
    }
  };

  const handleSignInClick = () => {
    setIsSignInClicked(true);
    setIsRegisterClicked(false);
  };

  const handleRegisterClick = () => {
    setIsRegisterClicked(true);
    setIsSignInClicked(false);
  };

  const handleCloseSignupCard = () => {
    setIsSignInClicked(false);
  };

  const handleCloseLoginCard = () => {
    setIsRegisterClicked(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
  <>
    <header>
      <nav className="navbar navbar-expand-lg navbar-light navbar-head-style">
        <a className="navbar-brand" href="#"><img src={medbrand} alt="Brand Logo" height="36px" className='brand-img'/></a>
        <button type="button" className="btn nav-signin-button" onClick={handleShowPopup}>Launching Fall 2024</button>
      </nav>
      {isSignInClicked && (
        <div className="blur-background">
          <LoginCard onClose={handleCloseSignupCard} onSwitchToSignup={handleRegisterClick} />
        </div>
      )}
      {isRegisterClicked && (
        <div className="blur-background">
          <SignupCard onCloseSignupCard={handleCloseLoginCard} onSwitchToLogin={handleSignInClick} />
        </div>
      )}
    </header>

        <Midpopup show={showPopup} handleClose={handleClosePopup}  className="blur-background"/>

</>
  );
}

export default Navbar;
