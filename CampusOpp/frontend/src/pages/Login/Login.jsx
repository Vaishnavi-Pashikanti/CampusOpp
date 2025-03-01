import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import "../../styles/Login.css";

const Login = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleLogin = (e) => {
        e.preventDefault(); // Prevent form refresh
        // Perform authentication logic here (e.g., API call)
        
        // Redirect to Home Page after login
        navigate("/home");
    };

    const handleGoogleLogin = () => {
        window.open("http://localhost:5000/auth/google", "_self");
    };

    const handleLinkedInLogin = () => {
        window.open("http://localhost:5000/auth/linkedin", "_self");
    };

    const handleFacebookLogin = () => {
        window.open("http://localhost:5000/auth/facebook", "_self");
    };

    return (
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

                <button type="submit">Login</button> {/* Form submits to handleLogin */}

                <div className="socialDivider"><span>or</span></div>
                <div className="social-login">
                    <button type="button" onClick={handleGoogleLogin} className="social-btn">
                        <img src="/icons/googles.svg" alt="Google Login" className="social-icon" />
                    </button>
                    <button type="button" onClick={handleLinkedInLogin} className="social-btn">
                        <img src="/icons/linkedins.svg" alt="LinkedIn Login" className="social-icon" />
                    </button>
                    <button type="button" onClick={handleFacebookLogin} className="social-btn">
                        <img src="/icons/facebooks.svg" alt="Facebook Login" className="social-icon" />
                    </button>
                </div>

                <p className="no-acc">
                    Don't have an account? <Link to="/signup">SIGN UP</Link>
                </p>
            </form>
        </div>
    );
};

export default Login;
