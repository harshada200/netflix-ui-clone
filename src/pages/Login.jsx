import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">

      {/* HEADER */}
      <div className="login-header">
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
            alt="Netflix"
            className="login-logo"
          />
        </Link>

        <Link to="/" className="home-btn">
          Home
        </Link>
      </div>

      {/* LOGIN BOX */}
      <div className="login-box">
        <h1>Sign In</h1>

        <input type="email" placeholder="Email or phone number" />
        <input type="password" placeholder="Password" />

        <button className="login-btn">Sign In</button>
        <p className="help">Need help?</p>
      </div>
    </div>
  );
}

export default Login;
