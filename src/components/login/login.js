import React, { useState, useEffect } from 'react';
import './login.css';
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { BsFillEmojiSunglassesFill, BsEmojiWinkFill } from "react-icons/bs";
import { MdWavingHand } from "react-icons/md";

const TypingText = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setDisplayedText(text.slice(0, index + 1));
      index++;
      if (index === text.length) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, [text]);

  return <p className='icon3'>{displayedText}</p>;
};

const LoginCard = ({ onClose, onSwitchToSignup, onForgotPassword }) => {
  return (
    <div className="login-card">
      <div className="login-sections-container">
        <div className="icon-section">
          <img className="icon1" src="https://s3-alpha-sig.figma.com/img/5d43/d183/01927aa036687631230a4b0866331908?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AJGfZ-ZAMDQ95-ETXIn610wi7UI8-CPm7uhqVA6~qhpC5T5CZ76nTAzINXct~8a20NdEqj6ruKhYlV9WQXbZ32VlGarG6w9k~68mRWouud0UrTmGG~lijnSC~80wc8-giQBRbkQ4w~ZD4qelCMDZrTU61FB5IPcIeIbFn0pZ1nNm4UbVBDt2ZFEdXhiYatTq5xPV5uNoyI~B0Qq5mR-0CK60RQk5utWfsJhTsNIosPqHeoD2S3~TeeyfKxS8s~uHfoteMUxo11AbJcjBcGP-AQFwuP~YhzQnIUtEPe1uLCD-Tg7AGeG4BhkicJiWqT9bJOEypVkzpfQizQFmLcEDmg__" alt="star-1" />
          <BsFillEmojiSunglassesFill className='icon2'/>
          <TypingText text="Hey! How you doing today🤔?" className='icon3' />
          
          <img className="icon4" src="https://s3-alpha-sig.figma.com/img/2820/d2d7/574e8fa7340dd1232b33dbc559c16f30?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e~JBDXC5o7n2730k51YClSH7W2lH2coBd5a3ZEMaIqsoPHYULck72KfKpNub4lUgFmFXZDvIrxP8Akd68C19HIt3ExdL2iL77ZOQ2Djx~U2ODGEmUZijRZXBsEJ7X-bqvDhtbbPnn8knws2yXd1AsLdx4miO4c~pP6jfhZ6VCSUW4CJvRlAzT1rdxZng96khODOscXmV4JsFAsYdm6essc2hN4xlx8zpzjRP6lKf9SY4dXUiUl3DFfWypmqv2j0CpxAp7nWurp-sqxcDDEVEXDSPzVcctTQYDBEyfFKujXWJm6WdEUfpZ944FuG~yJo-MxOE0bQy9kaZx~qrII2A7Q__" alt="star-4" />
          <img className="icon5" src="https://s3-alpha-sig.figma.com/img/6b74/ddbb/2a6a01f590d67d15358e50c0555ab366?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Olsb9P5Bq3CL~bI0Hp2rP4yDqQOVlIlgGRAJ6Tc2ZA1J~P6yfvVacKqh8IiLrJ2CCaFaWnOmqBUki78WvxdZdkwCgClrVAydeSbKOmLLpSYLiyXnl8ZbHIPujNOjrHNJna0x2awJP8XuO85XljPV3KRNxzMrxT1sKz1DOJ~CBhGM~qGTOcqLEIuNgnGLV6wx3E-aKXTTGy3KXMVpILzzy4sdFFnhJBIG4kEld3QDUt-kWOIaVAhm~8PhVuut12CmJmu9CM00O-8UxMXciQBE0QN2n4m4GAJtDPy3fAXt1qYVBwO2Rvw1KWfGO1IBOZpAgJF11xWvoMs7~X-G6K9s5Q__" alt="star-5" />
          <img className="icon6" src="https://s3-alpha-sig.figma.com/img/1703/e4cf/31403ce9c46ea1c3bb683db3392c8a95?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jIEtjfEVsNQvrGOeqJN7XDcyDgHLKAdEzvg7TlF1WFj1klYThgUpG~ipUPOc~~ObK2ifvb9KOrZMxRUPlJjlOMJaigQHQMI8Pbmv0kJCOmKj4iyWaCCmfYL4QBXXq7~ZZ6lV2~BM3XCDluJsYfXSWtLaKhPRy8fT5S4LfW-J7~9S3A3UeWeLLgAd0woKcWh~HcsO~ncvjOG-nWTz4VidcCInk8rbI~m5crz135IoVvaBy3hE49C1BcL83NjeXV~zouIC7WI6szdZqnRoJSJsXxYCN3K2Jq~PGkP0WF5tf0gIaC~g8EUX72SgBHRJSnXw6kYS2kjb2mg6TXUCsFM5kQ__" alt="star-6" />
        </div>

        <div className="login-section">
          <div className="login-section-div">
            <img src="./logo.png" alt="Signup" width={"70px"} height={"20px"} className='logoimgg' />
            <button className='login-close-btn' onClick={onClose}>
              <IoClose />
            </button>
            <div>
              <h2 className='login-section-h1'>Login</h2>
              <p className='login-section-p'>Log in to your account.</p>
              <form>
                <div className="login-form-group">
                  <label htmlFor="email">Email</label>
                  <input className='login-inputs' type="email" id="email" name="email" placeholder='Enter your email' />
                </div>
                <div className="login-form-group">
                  <label htmlFor="password">Password</label>
                  <input className='login-inputs' type="password" id="password" name="password" placeholder='Enter your password' />
                  <a href="#" className='login-forgot-password' onClick={onForgotPassword}>Forgot Password?</a>
                </div>
                <button type="submit" className="login-button">Log In</button>
                <p className='login-section-prp'>or</p>
              </form>
              <div className="login-social-login">
                <button className="login-social-login-button login-google-login">
                  <FcGoogle className='login-giocn' /> 
                </button>
                <button className="login-social-login-button login-apple-login">
                  <FaApple className='login-aiocn' /> 
                </button>
              </div>
              <p className='login-section-pp'>
                Don't have an account? <span className='login-signup' onClick={onSwitchToSignup}>Sign Up</span>
              </p>
              <p className='login-section-ppy'><b>Are you a provider?</b> <button className='btm'>Log in Here</button></p>
            </div>
          </div>
        </div>

        <div className="icon-section">
          <img className="icon7" src="https://s3-alpha-sig.figma.com/img/0dd3/3b77/5c7e2731ae451765b999cd90fe0d5590?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EVVv1BcHP-sFA53bcwTvIIUB-iEcfG7b2P81uWiwIVWFs1X0Zk~qWd92-UpUgWFkgWZnMsT1mYRE1DQhTNWtiUFwypXJ8aPzepicksDFuiA3IHPSsoPuOjwJRSimywcJlqbYZdgLc0vWfgrfEgBWWKQhwJtCDQpmAvjuDap~OCR6k36xSN1WGbovD1wyqpbg-jrxxXSwWdEyJ9Fs1dUJkhMQunM2Uwqwh7eh9kxMo31C4vfaJlcUWUUTHfmxI1z8NiZu1O4orHsy4OjeUxs0aTmthjJsplBf01EAsWsKVXPdzdTzHT51fnV~MDWyu6mqca09CN4MxjPmJjwMplXQFw__" alt="star-7" />
          <MdWavingHand className='icon8' />
          <img className="icon9" src="https://s3-alpha-sig.figma.com/img/ba18/67e7/b73adb634850dff9a0ba3ec6da6ccbb6?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qqb477wuAFNyx2MP9dltIK1rgK-3BnDKMyPeaZu5qRBCjvf0h0Gnu~tZwElG~Ixf8mGUuWAog7MJ2Yw2JY3pIK3G28UoUNKD7-Z7g6jHjVJ-FfzQw7AFsZiIypFKBMKyshFuwEyMCreDDETHFcWMiA1hJTjJxUL39uaq~6vhtUzMCy3Tutx1-TXrv40y3KvaPdCKKqCG4S7h4pMiUxd4eNjnoRoauj1PhOwBGeb47Plmt-9cjofdNh03bT30jGwBVPSL3naEBM1Zprtj3ppene41dtvKVyHvBVPGATQuyAyr1ZQWRIiDs~EP0ecCZHmpYbF6teB0rfde5LzoFgqDpg__" alt="star-9" />
          <img className="icon10" src="https://s3-alpha-sig.figma.com/img/3097/ab85/2520918d3018c9d40882bb87aaf63f65?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QtQxDCU00E6Mb1a3I64chviEpS2qFCdiQC5Ca0X1ozqIpdFvZCMFXp3LIU5Iq0avufYCRXHlRYwgy244ie~1HWcFsD8QyUWTXBbLm5LFYE1hB~WZAuocr8~E5U8QKdRHOqSW81PRR8LOVLWpN5M~I3w4JwAKrw0yhXZC0YaMzZulVQ9V1kl1hfyYDtfomx-6zopNAyzZMqLEiGtKa5ssMqAsPuxZPaiG2PFhg~HoNB6gg2FGz3v15NRPa0Fodxgb8sfro~gVhXDub-PsM-hSgk-onMNZThYawLuR2gpqhq0iO3ythPZdMcdNdaNLEPhWO5xrWStNbWC6itHMh-FwDg__" width={"70px"} height={"100px"} alt="star-10" />
          <p className='icon11'>Yes, We Care!<br/> Your Wellness, Our Mission</p>
        </div>
      </div>
    </div>
  );
};

export default LoginCard;