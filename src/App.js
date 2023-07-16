import React, { useState } from "react";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import Body from "./components/body/Body";
import Otp from "./components/otp/Otp";
import Signup from "./components/signup/Signup";
import LoginForm from "./components/login/LoginForm";

function App() {
  const [showSignup, setShowSignup] = useState(true);
  const [showOtp, setShowOtp] = useState(false);

  const handleSignup = () => {
    setShowSignup(false);
    setShowOtp(true);
  };

  const handleOtpVerified = () => {
    setShowSignup(false);
    setShowOtp(false);
  };

  return (
    <>
      {showSignup && !showOtp && <Signup handleSignup={handleSignup} />}
      {showOtp && (
        <Otp
          handleSignup={handleSignup}
          handleOtpVerified={handleOtpVerified}
        />
      )}
      {!showSignup && !showOtp && (
        <>
          <Nav />
          <Body />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
