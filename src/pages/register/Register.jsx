import { useRef } from "react";
import { useState } from "react";
import "./register.scss";

const Register = () => {
  const [email, setEmail] = useState("");

  const emailRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };

  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <button className="loginButton">Sign In</button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="email address" ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>
              Get Started
            </button>
          </div>
        ) : (
          <div className="input">
            <input type="password" placeholder="password" />
            <button className="registerButton">Start</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;
