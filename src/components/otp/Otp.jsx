import React, { useState } from "react";
import "./otp.css";

function Otp({ handleSignup, handleOtpVerified }) {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [apiError, setApiError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://to-do-ntrh.onrender.com/user/verify",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            otp,
          }),
        }
      );

      if (response.ok) {
        setApiError(false);
        console.log("API request successful");
        handleSignup();
        handleOtpVerified(); // Call the handleOtpVerified function from the parent component
      } else {
        setApiError(true);
        throw new Error("API request failed");
      }
    } catch (error) {
      console.error(error);
      setApiError(true);
    }
  };

  return (
    <div className="container">
      <div className="form-wrapper">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="otp">OTP</label>
            <input
              type="text"
              id="otp"
              placeholder="Enter the OTP"
              required
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
      {apiError && <p>Invalid credentials. Please try again.</p>}
    </div>
  );
}

export default Otp;
