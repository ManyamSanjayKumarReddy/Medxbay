import React from 'react';
import './DiscoverVirtual.css';
import adduser from './Assets/add-user.png';
import schedule from './Assets/schedule.png';
import videocamera from './Assets/video-camera.png';

const DiscoverVirtual = () => {
  return (
    <div className="discover-virtual">
      <div className='discove-heading'>
        <h1>Discover Virtual</h1>
        <p>Your Health, Your Convenience, Anytime, Anywhere</p>
      </div>  
      <div className="progress-container">

        <div className="progress-item">1</div>
        <div className="progress-line"></div>
        <div className="progress-item current">2</div>
        <div className="progress-line"></div>
        <div className="progress-item">3</div>
      </div>

      <div className="step-container">
        <div className='content'>
          <div className='image-container'>
            <img src={adduser} alt="Sign Up" className="step-icon" />
          </div>
          <h3>Sign up or Log in</h3>
          <p className='jsut-align'>Easily create an account or log in securely to get started.</p>
        </div>

        <div className='content'>
          <div className='image-container current'>
            <img src={schedule} alt="Book Your Appointment" className="step-icon" />
          </div>
          <h3>Book Your Appointment</h3>
          <p className='jsut-align'>Browse doctors by specialty, read reviews, and pick a convenient time.</p>
        </div>

        <div className='content'>
          <div className='image-container'>
            <img src={videocamera} alt="Start Your Virtual Consultation" className="step-icon" />
          </div>
          <h3>Start Your Virtual Consultation</h3>
          <p>Join from any device at any time and consult with your doctor comfortably from your home.</p>
        </div>
      </div>
    </div>  
  );
};

export default DiscoverVirtual;
