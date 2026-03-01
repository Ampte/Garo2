import { useNavigate } from "react-router-dom";

function Footer() {

    const navigate = useNavigate();
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <h3>Garo2</h3>
          <p>Learn, Translate and Preserve the Garo Language.</p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <p onClick={() => navigate("/")}>Home</p>
          <p onClick={() => navigate("/Translator")}>Translate</p>
        </div>

        <div>
          <h4>Contact</h4>
          <p>Email: g2garo2@gmail.com</p>
          <p>India</p>
        </div>
      </div>

      <div className="copyright">
        © 2026 Garo2. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;