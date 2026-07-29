import { useState } from "react";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="navbar">
      <h2 className="logo">Jodas Technologies</h2>
      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}   /* or onClick={() => setMenuOpen(prev => !prev)}*/
      >
        ☰
      </button>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;