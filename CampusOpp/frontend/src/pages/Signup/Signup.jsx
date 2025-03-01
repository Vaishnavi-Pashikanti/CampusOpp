import React from "react";
import "../../styles/Signup.css";
import { useState } from "react";
import { FaUser, FaEnvelope, FaEye, FaEyeSlash, FaLock } from "react-icons/fa";

const Signup = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };


    const handleGoogleSignup = () => {
        window.open("http://localhost:5000/auth/google", "_self");
    };

    const handleFacebookSignup = () => {
        window.open("http://localhost:5000/auth/facebook", "_self");
    };


    return (
        <body className="signup-body">
                <div className="signup-container">
                <form className="signup-form">
                    <h2>Create Account</h2>

                    <div className="name">
                        <div className="input-container">
                            <FaUser className="icon" />
                            <input type="text" placeholder="Firstname" className="iname" required />
                        </div>
                        <div className="input-container">
                            <FaUser className="icon" />
                            <input type="text" placeholder="Lastname" className="iname" required />
                        </div>
                    </div>

                    <div className="input-container">
                        <FaUser className="icon" />
                        <input type="text" placeholder="Username" className="ip" required />
                    </div>

                    <div className="input-container">
                        <FaEnvelope className="icon" />
                        <input type="email" placeholder="Email" className="ip" required />
                    </div>

                    <div className="input-container">
                        <FaLock className="icon" />
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            className="ip"
                            required
                        />
                        {showPassword ? (
                            <FaEyeSlash className="eye-icon" onClick={togglePasswordVisibility} />
                        ) : (
                            <FaEye className="eye-icon" onClick={togglePasswordVisibility} />
                        )}
                    </div>
                
                    <div className="input-container">
                        <FaLock className="icon" />
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Confirm Password"
                            className="ip"
                            required
                        />
                        {showConfirmPassword ? (
                            <FaEyeSlash className="eye-icon" onClick={toggleConfirmPasswordVisibility} />
                        ) : (
                            <FaEye className="eye-icon" onClick={toggleConfirmPasswordVisibility} />
                        )}
                    </div>

                    <div className="terms">
                        <input type="checkbox" id="terms" required />
                        <label htmlFor="terms">I agree to the terms and conditions</label>
                    </div>

                    <button type="submit">Sign Up</button>

                    <div className="socialDivider"><span>or</span></div>

                    <div className="social-login">
                        <a href="/auth/google">
                            <img src="/icons/googles.svg" alt="Google Login" className="social-icon" />
                        </a>
                        <a href="/auth/linkedin">
                            <img src="/icons/linkedins.svg" alt="LinkedIn Login" className="social-icon" />
                        </a>
                    </div>

                    <p className="have-acc">Already have an account? <a href="/login">Login</a></p>
                </form>
            </div>
        </body>
    );
};

export default Signup;