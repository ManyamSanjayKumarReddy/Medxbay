import React, { useState ,useEffect, useRef } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './Midpopup.css';
import schedule from './components/Assets/schedule.svg'
import meds from './assests/img/meds.svg';
import stethoscope from './assests/img/stethoscope.svg';
import scheduletwo from './assests/img/schedule-two.svg';
import doctorconsultation from './components/Assets/doctorconsultation .svg';
import medicalexamsvg from './components/Assets/medicalexamsvg.svg';
import heartbeat from './components/Assets/heartbeat.svg';
import brand from './components/Assets/medbrand.png'
import curvedesign from './assests/img/curvedesign.svg'
import curvedsigntwo from './assests/img/curvedsigntwo.svg';
import Typed from 'typed.js';
const Midpopup = ({ show, handleClose }) => {
  const typedElement = useRef('');
  const typedElementTwo = useRef('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [roleError, setRoleError] = useState('');



  useEffect(() => {
    if (typedElement.current) {
      const options = {
        strings: ['Greetings! 👋 Book your visit <br>today. 📅'],
        typeSpeed: 50,
        backSpeed: 50,
        showCursor: false,
      };

      const typed = new Typed(typedElement.current, options);

      return () => {
        typed.destroy();
      };
    }
  }, [show]);
  useEffect(() => {
    if (typedElementTwo.current) {
      const optionsTwo = {
        strings: ['Hey! 😊 Hope you\'re well! 🌟'],
        typeSpeed: 50,
        backSpeed: 50,
        showCursor: false,
      };

      const typedTwo = new Typed(typedElementTwo.current, optionsTwo);

      return () => {
        typedTwo.destroy();
      };
    }
  }, [show]);

  const validateName = (value) => {
    const trimmedValue = value.trim();

    if (trimmedValue.length === 0) {
      setNameError('Name is required.');
      return false;
    }

    if (trimmedValue[0] === ' ') {
      setNameError('Name should not start with a space.');
      return false;
    }

    if (!/^[a-zA-Z ]+$/.test(trimmedValue)) {
      setNameError('Name should only contain alphabets and spaces.');
      return false;
    }

    if (trimmedValue.includes('  ')) {
      setNameError('Name should not have more than 2 consecutive spaces.');
      return false;
    }

    if (trimmedValue.length < 3 || trimmedValue.length > 50) {
      setNameError('Name should be between 3 to 50 characters.');
      return false;
    }

    setNameError('');
    return true;
  };

  const validateEmail = (value) => {
    const trimmedValue = value.trim();

    if (trimmedValue.length === 0) {
      setEmailError('Email is required.');
      return false;
    }

    if (!/\S+@\S+\.\S+/.test(trimmedValue)) {
      setEmailError('Please enter a valid email address.');
      return false;
    }

    setEmailError('');
    return true;
  };

  const validateRole = () => {
    if (role === '') {
      setRoleError('Please choose either Provider or Patient.');
      return false;
    }

    setRoleError('');
    return true;
  };

  const handleNameChange = (event) => {
    const { value } = event.target;
    setName(value);
    validateName(value);
  };

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
    validateEmail(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const isNameValid = validateName(name);
    const isEmailValid = validateEmail(email);
    const isRoleValid = validateRole();

    if (!isNameValid || !isEmailValid || !isRoleValid) {
      return;
    }

    const formData = {
      name: name,
      email: email,
      role: role,
    };

    try {
      const response = await fetch('https://medxbay.com/form.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      if (result.message) {
        alert(result.message);
      } else {
        console.log(result);
      }

      handleClose();
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered className="custom-modal">
      <Modal.Title>
        <span className="model-header">Thank You!</span>{' '}
        <span className="model-header-sub"> Stay tuned for something amazing 🎉</span>
      </Modal.Title>
      <button type="button" className="btn-close-custom" aria-label="Close" onClick={handleClose}>
        x
      </button>
      <Modal.Body>
        <div className="smile-emoji">
          <img src={brand} alt="logo" className="brand-image-logo" />
          <div className="emoji-ring">😇</div>
          <div className="calender-emoji-container">
            <img src={schedule} alt="meds" className="calender-emoji" />
          </div>
          <img src={meds} alt="meds" className="band-aid-emoji" />
          <img src={stethoscope} alt="meds" className="stethoscope-emoji" />
          <img src={scheduletwo} alt="meds" className="scheduletwo-emoji" />
          <img src={doctorconsultation} alt="meds" className="consultation-emoji" />
          <img src={medicalexamsvg} alt="meds" className="medicalexam-emoji" />
          <div className="hand-emoji">👋</div>
          <img src={heartbeat} alt="meds" className="heartbeat-emoji" />
          <div>
            <img src={curvedsigntwo} alt="meds" className="curvedsigntwo" />
            <p className="running-text-two">
        <span ref={typedElement}></span>
      </p>
          </div>
          <img src={curvedesign} alt="meds" className="curvedesign" />
          <p className="running-text">
          <span ref={typedElementTwo}></span></p>
        </div>
        <Form onSubmit={handleSubmit} className="form-overall-container">
          <Form.Group className="mb-3" controlId="formUsername">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your Name"
              className="form-control-custom"
              value={name}
              onChange={handleNameChange}
              isInvalid={!!nameError}
            />
            <Form.Control.Feedback type="invalid">{nameError}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your Email"
              className="form-control-custom"
              value={email}
              onChange={handleEmailChange}
              isInvalid={!!emailError}
            />
            <Form.Control.Feedback type="invalid">{emailError}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>
              <i className="fas fa-user-check"></i> Are you a :
            </Form.Label>
            <div className="mt-3 radio-buttons">
              <Form.Check
                inline
                type="radio"
                label="Provider"
                name="role"
                value="provider"
                checked={role === 'provider'}
                onChange={() => setRole('provider')}
                isInvalid={!!roleError}
              />
              <Form.Check
                inline
                type="radio"
                label="Patient"
                name="role"
                value="patient"
                checked={role === 'patient'}
                onChange={() => setRole('patient')}
                isInvalid={!!roleError}
              />
              {roleError && (
                <div className="invalid-feedback d-block radio-invalid">{roleError}</div>
              )}
            </div>
          </Form.Group>

          <Button variant="primary" type="submit" className="btn-custom">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default Midpopup;
