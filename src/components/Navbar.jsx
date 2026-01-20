import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        alt="Netflix"
        className="logo"
      />

      <div className="nav-right">
        <select>
          <option>English</option>
          <option>Hindi</option>
        </select>

        <button className="signin">Sign In</button>
      </div>
    </div>
  );
}

export default Navbar;
