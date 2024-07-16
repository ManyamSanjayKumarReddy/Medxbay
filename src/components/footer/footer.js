import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './footer.css';

function Footerr() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const launchDate = new Date('2024-08-11T00:00:00');
    const now = new Date();
    const difference = launchDate - now;
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleRedirect = () => {
    window.location.href = 'https://1b8ac4zldif.typeform.com/to/GsLas3JG';
  };

  const circleColor = "#0167FF";

  return (
    <div className="footer-containers">
      <div className="footer-container">
        <div className="left-section">
         <p className='launch-notification' ><b>We are Launching  soon </b></p>
          <div className="timer-container">
            <div className="timer-box">
              <CircularProgressbar
                value={timeLeft.days || 0}
                maxValue={30}
                text={`${timeLeft.days || 0} Days`}
                styles={buildStyles({
                  textSize: '15px',
                  textColor: "black",
                  pathColor: circleColor,
                  trailColor: "white",
                  pathTransitionDuration: 0.5,
                  strokeWidth: 1,
                })}
              />
            </div>
            <div className="timer-box">
              <CircularProgressbar
                value={timeLeft.hours || 0}
                maxValue={24}
                text={`${timeLeft.hours || 0} Hours`}
                styles={buildStyles({
                  textSize: '15px',
                  textColor: "black",
                  pathColor: circleColor,
                  trailColor: "white",
                  pathTransitionDuration: 0.5,
                  strokeWidth: 1,
                })}
              />
            </div>
            <div className="timer-box">
              <CircularProgressbar
                value={timeLeft.minutes || 0}
                maxValue={60}
                text={`${timeLeft.minutes || 0} Mins`}
                styles={buildStyles({
                  textSize: '15px',
                  textColor: "black",
                  pathColor: circleColor,
                  trailColor: "white",
                  pathTransitionDuration: 0.5,
                  strokeWidth: 1,
                })}
              />
            </div>
            <div className="timer-box">
              <CircularProgressbar
                value={timeLeft.seconds || 0}
                maxValue={60}
                text={`${timeLeft.seconds || 0} Secs`}
                styles={buildStyles({
                  textSize: '15px',
                  textColor: "black",
                  pathColor: circleColor,
                  trailColor: "white",
                  pathTransitionDuration: 0.3,
                  strokeWidth: 1,
                })}
              />
            </div>
          </div>
        </div>
        <div className="right-section">
        <p className="launch-notification">Get notified when we launch</p>
          <p className="investment-inquiries">For investment or media inquiries</p>
          <button className="cta-button" onClick={handleRedirect}>Click here</button>
        </div>
      </div>
    </div>
  );
}

export default Footerr;