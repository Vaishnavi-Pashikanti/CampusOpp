import React, { useState } from "react";
import "../../styles/Signup.css";
import { FaUser, FaEnvelope, FaEye, FaEyeSlash, FaLock } from "react-icons/fa";

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword((prev) => !prev);
    };

    return (
        <div className="signup-body">
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

                    {/* Password Field */}
                    <div className="input-container">
                        <FaLock className="icon" />
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            className="ip"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <span className="eye-icon" onClick={togglePasswordVisibility}>
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>

                    {/* Confirm Password Field */}
                    <div className="input-container">
                        <FaLock className="icon" />
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Confirm Password"
                            className="ip"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                        <span className="eye-icon" onClick={toggleConfirmPasswordVisibility}>
                            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
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
        </div>
    );
};

export default Signup;
