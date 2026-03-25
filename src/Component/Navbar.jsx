import React, { useState } from "react";
import { Menu, X, ChevronDown, ChevronRight, Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/screenify.png";
import "./Navbar.css";

export default function Navbar({ themeMode = 'light', onToggleTheme }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileFeaturesOpen, setMobileFeaturesOpen] = useState(false);

  return (
    <>
    <nav className="nav-container">
      <div className="nav-left">
        <button className="theme-toggle" onClick={onToggleTheme} aria-label="Toggle theme">
          {themeMode === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
        </button>
        <Link to="/" className="brand">
          <img src={logo} alt="Screenify" className="logo-img" />
          <span className="logo-text">Screenify</span>
        </Link>

        <ul className="nav-links">
          <li
            className="dropdown"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            Features <ChevronDown size={16} />
            {dropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/features?tab=meeting-notes">Meeting Notes</Link>
                <Link to="/features?tab=screen-recorder">Screen Recorder</Link>
                <Link to="/features?tab=screenshots">Screenshots</Link>
                <Link to="/features?tab=ai">Loom AI</Link>
                <Link to="/features?tab=editing">Editing</Link>
              </div>
            )}
          </li>

          <li><Link to="/resources">Resources</Link></li>
          <li><Link to="/events">Events</Link></li>
        </ul>
      </div>

      <div className="nav-right">
        <Link to="/try" className="try-btn">Try it free</Link>
        <Link to="" className="signin-btn">Record Now</Link>
      </div>

      <div className="mobile-menu-icon" onClick={() => setMobileOpen(!mobileOpen)}>
        {mobileOpen ? <X size={28} /> : <Menu size={28} />}
      </div>

      {mobileOpen && (
        <div className="mobile-menu">
          <button className="try-btn mobile-btn mobile-cta">Try it free</button>

          <button className="mobile-row" onClick={() => setMobileFeaturesOpen(v => !v)}>
            <span>Features</span>
            <ChevronRight size={18} />
          </button>
          {mobileFeaturesOpen && (
            <div className="mobile-dropdown">
              <Link to="/features?tab=meeting-notes">Meeting Notes</Link>
              <Link to="/features?tab=screen-recorder">Screen Recorder</Link>
              <Link to="/features?tab=screenshots">Screenshots</Link>
              <Link to="/features?tab=ai">Loom AI</Link>
              <Link to="/features?tab=editing">Editing</Link>
            </div>
          )}

          <Link to="/resources" className="mobile-row">Resources</Link>
          <Link to="/events" className="mobile-row">Events</Link>

          <Link to="" className="signin-btn mobile-btn mobile-sign">Record Now →</Link>
        </div>
      )}
    </nav>
    <div className="nav-spacer" />
    </>
  );
}
