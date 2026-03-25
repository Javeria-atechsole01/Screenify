import React from "react";
import "./signup.css";
import logo from "../assets/screenify.png";
const LoginPage = () => {
  return (
    <div className="container">
      <div className="card">

        <img src={logo} alt="Screenify" className="signup-logo" />
        <h2>Log in to continue</h2>

        <label>Email *</label>
        <input type="email" placeholder="Enter your email" />

        <div className="remember">
          <input type="checkbox" />
          <span>Remember me</span>
        </div>

        <button className="btn-primary">Continue</button>

        <div className="divider">Or login with:</div>

        <button className="btn-outline">
          <span className="icon">🔑</span> Passkey
        </button>

        <div className="divider">Or continue with:</div>

        <button className="btn-social">
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="Google"
          />
          Google
        </button>

        <button className="btn-social">
          <img
            src="https://id-frontend.prod-east.frontend.public.atl-paas.net/assets/microsoft-logo.c73d8dca.svg"
            alt="Microsoft"
          />
          Microsoft
        </button>

        <button className="btn-social">
          <img
            src="https://id-frontend.prod-east.frontend.public.atl-paas.net/assets/apple-logo.54e0d711.svg"
            alt="Apple"
          />
          Apple
        </button>

      </div>
    </div>
  );
};

export default LoginPage;
