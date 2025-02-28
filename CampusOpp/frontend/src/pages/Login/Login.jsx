import React from "react";
import "../../styles/Login.css";

const Login = () => {
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
            <form className="login-form">
                <h2>Login</h2>
                <input type="text" placeholder="UserName" className="ip" />
                <input type="password" placeholder="Password" className="ip" />
                
                <div className="options ">
                    <label className="rem">
                        <input type="checkbox" className="checkbox"/> Remember Me
                    </label>
                    <span className="fp">Forgot Password?</span>
                </div>

                <button type="submit">Login</button>

                <div class="socialDivider"><span>or</span></div>
                <div className="social-login">
                    <a href="/auth/google">
                      <img src="/icons/googles.svg" alt="Google Login" className="social-icon" />
                    </a>
                    <a href="/auth/linkedin">
                      <img src="/icons/linkedins.svg" alt="LinkedIn Login" className="social-icon" />
                    </a>
                </div>

                <p className="no-acc">Don't have an account? <a href="/signup">SIGN UP</a></p>
            </form>
        </div>
    );
};

export default Login;
