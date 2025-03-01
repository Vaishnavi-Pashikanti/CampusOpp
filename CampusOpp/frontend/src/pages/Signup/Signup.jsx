import React from "react";
import "../../styles/Signup.css";

const Signup = () => {
    const handleGoogleSignup = () => {
        window.open("http://localhost:5000/auth/google", "_self");
    };

    const handleFacebookSignup = () => {
        window.open("http://localhost:5000/auth/facebook", "_self");
    };

    return (
        <div className="signup-container">
            <form className="signup-form">
                <h2>Create Account</h2>
                <input type="email" placeholder="Email" className="ip" required />
                <input type="password" placeholder="Password" className="ip" required />
                
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
    );
};

export default Signup;