// src/components/NavBar.jsx
import React, { useState } from "react";
import "./NavBar.css";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="logo">
          <a href="/" onClick={() => window.location.reload()}>
            Noviral
          </a>
        </div>
        <ul className="nav-links">
          <li
            className="nav-item"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#" className="nav-link">
              PRODUCT
            </a>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li className="dropdown-item">
                  <a href="/category1">ASDQDSA</a>
                </li>
                <li className="dropdown-item">
                  <a href="/category2">ASDQasda</a>
                </li>
                <li className="dropdown-item">
                  <a href="/category3">ASDQasdasSDA</a>
                </li>
              </ul>
            )}
          </li>
          <li className="nav-item">
            <a href="/login" className="nav-link">
              LOGIN
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
