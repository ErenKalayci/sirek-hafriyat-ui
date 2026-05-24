import { useState } from "react";
import logo from "../assets/logoşirek.png";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar-wrapper">
      <div className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="Sirek Hafriyat Logo" />
        </div>

        <nav className="navbar-menu">
          <a href="#anasayfa">Ana Sayfa</a>
          <a href="#hizmetler">Hizmetler</a>
          <a href="#hakkimizda">Hakkımızda</a>
          <a href="#projeler">Projeler</a>
          <a href="#iletisim">İletişim</a>
        </nav>

        <div className="navbar-actions">
          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <a href="#anasayfa" onClick={() => setMenuOpen(false)}>
          Ana Sayfa
        </a>

        <a href="#hizmetler" onClick={() => setMenuOpen(false)}>
          Hizmetler
        </a>

        <a href="#hakkimizda" onClick={() => setMenuOpen(false)}>
          Hakkımızda
        </a>

        <a href="#projeler" onClick={() => setMenuOpen(false)}>
          Projeler
        </a>

        <a href="#iletisim" onClick={() => setMenuOpen(false)}>
          İletişim
        </a>
      </div>
    </header>
  );
}

export default Navbar;
