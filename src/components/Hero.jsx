import "./Hero.css";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <div className="hero">
      <header className="hero-header">
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="Netflix"
        />

        <div className="header-right">
          <select className="lang">
            <option>English</option>
          </select>

          {/* SIGN IN */}
          <button
            className="sign-in"
            onClick={() => navigate("/login")}
          >
            Sign In
          </button>
        </div>
      </header>

      <div className="hero-content">
        <h1>Unlimited movies, shows, and more</h1>

        <div className="email-box">
          <input type="email" placeholder="Email address" />

          {/* GET STARTED */}
          <button onClick={() => navigate("/login")}>
            Get Started ›
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
