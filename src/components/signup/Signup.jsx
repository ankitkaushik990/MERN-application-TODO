import React, { useState } from "react";
import "./signup.css";
import Otp from "../otp/Otp";

function Signup({ handleSignup }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showOtp, setShowOtp] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const response = await fetch(
        "https://to-do-ntrh.onrender.com/user/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
            phone,
            name,
          }),
        }
      );

      if (response.ok) {
        // Handle successful signup here
        const data = await response.json();
        console.log(data); // You can handle the response as per your requirement

        handleSignup();
        setShowOtp(true); // Show the OTP component
      } else {
        // Handle error during signup
        throw new Error("Signup failed");
      }
    } catch (error) {
      // Handle error during signup
      console.error(error);
    }

    setIsLoading(false);
  };

  return (
    <>
      <div className="signup_body">
        <div className="signup-container">
          <h2>Create an Account</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <button type="submit" disabled={isLoading}>
              {isLoading ? "Signing up..." : "Sign Up"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
