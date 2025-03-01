import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaEye, FaEyeSlash, FaLock } from "react-icons/fa";

import "../../styles/Login.css";

const Login = () => {
    const navigate = useNavigate(); 

    const handleLogin = (e) => {
        e.preventDefault(); 

        console.log("Login successful! Navigating to Home...");

        navigate("/home"); 
    };

    const handleGoogleLogin = () => {
        window.open("http://localhost:5000/auth/google", "_self");
    };

    const handleLinkedInLogin = () => {
        window.open("http://localhost:5000/auth/linkedin", "_self");
    };
    
    return (
        <body className="login-body">
            <div className="login-container">
                <form className="login-form" onSubmit={handleLogin}> 
                    <h2>Login</h2>
                    <input type="text" placeholder="UserName" className="ip" required />
                    <input type="password" placeholder="Password" className="ip" required />
                    
                    <div className="options">
                        <label className="rem">
                            <input type="checkbox" className="checkbox" /> Remember Me
                        </label>
                        <span className="fp">Forgot Password?</span>
                    </div>

                    <button type="submit">Login</button>

                    <div className="socialDivider"><span>or</span></div>
                    <div className="social-login">
                        <a href="/auth/google">
                            <img src="/icons/googles.svg" alt="Google Login" className="social-icon" />
                        </a>
                        <a href="/auth/linkedin">
                            <img src="/icons/linkedins.svg" alt="LinkedIn Login" className="social-icon" />
                        </a>
                    </div>

                    <p className="no-acc">
                        Don't have an account? <Link to="/signup">SIGN UP</Link>
                    </p>
                </form>
            </div>
        </body>
    );
};

export default Login;
