import { useState } from "react";
import g2 from "/src/assets/G2 LOGO.jpeg"
import { useNavigate } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={g2} className="g2-logo"/>
        <p className="g2">Garo2</p>
        </div>

      <div
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li onClick={() => navigate("/")}>Home</li>
        <li onClick={() => navigate("/Translator")}>Translate</li>
        <li onClick={() => navigate("/Learn")}>Learn</li>
        <li onClick={() => navigate("/G2")}>Chatbot</li>
      </ul>
    </nav>
  );
}

export default Navbar;