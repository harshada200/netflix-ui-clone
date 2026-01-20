import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="call">Questions? Call 000-800-919-1743</p>

      <div className="footer-links">
        <ul>
          <li>FAQ</li>
          <li>Investor Relations</li>
          <li>Privacy</li>
          <li>Speed Test</li>
        </ul>
        <ul>
          <li>Help Centre</li>
          <li>Jobs</li>
          <li>Cookie Preferences</li>
          <li>Legal Notices</li>
        </ul>
        <ul>
          <li>Account</li>
          <li>Ways to Watch</li>
          <li>Corporate Information</li>
          <li>Only on Netflix</li>
        </ul>
        <ul>
          <li>Media Centre</li>
          <li>Terms of Use</li>
          <li>Contact Us</li>
        </ul>
      </div>

      <select className="lang">
        <option>English</option>
      </select>

      <p className="country">Netflix India</p>
    </footer>
  );
}

export default Footer;
