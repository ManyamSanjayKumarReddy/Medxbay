

import React from 'react';
import logo from '../Assets/medbrand.png'; 

const Logo = () => {
  return (
    <header className="app-header">
      <img src={logo} className="app-logo" alt="logo" />
    </header>
  );
};

export default Logo;
