import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from 'react-router-dom';
import Logo from '../images/Logos/Denali_Logo_White_Transparent_BG.png';
import './header.css';

function Header({ onLinkClick = () => {} }) { // Default function for onLinkClick
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdowns = () => {
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 750) {
        closeDropdowns();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (dropdownRef.current) {
      if (isDropdownOpen) {
        dropdownRef.current.style.maxHeight = `${dropdownRef.current.scrollHeight}px`;
      } else {
        dropdownRef.current.style.maxHeight = '0';
      }
    }
  }, [isDropdownOpen]);

  return (
    <div className="navbar">
      <Link to="/" onClick={onLinkClick}>
        <img src={Logo} alt="Logo" height="75px" className="Denali-Logo" />
      </Link>
      <div className="link-container">
        <Link
          to="/"
          id="link1"
          className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          onClick={onLinkClick}
        >
          Home
        </Link>
        <Link
          to="/SolutionsHome"
          id="link2"
          className={`nav-link ${location.pathname === '/SolutionsHome' ? 'active' : ''}`}
          onClick={onLinkClick}
        >
          Solutions
        </Link>
        <Link
          to="/AboutUs"
          id="link3"
          className={`nav-link ${location.pathname === '/AboutUs' ? 'active' : ''}`}
          onClick={onLinkClick}
        >
          About Us
        </Link>
        <Link
          to="/Contact"
          id="link4"
          className={`nav-link ${location.pathname === '/Contact' ? 'active' : ''}`}
          onClick={onLinkClick}
        >
          Contact
        </Link>
      </div>
      <div
        className={`menu-icon ${isDropdownOpen ? 'open' : ''}`}
        onClick={toggleDropdown}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div ref={dropdownRef} className={`mobile-dropdown-menu ${isDropdownOpen ? 'open' : ''}`}>
        <Link
          to="/#HomeMainSection"
          className={`nav-link ${location.hash === '#HomeMainSection' || location.pathname === '/' ? 'active' : ''}`}
          onClick={() => { closeDropdowns(); onLinkClick(); }}
        >
          Home
        </Link>
        <Link
          to="/SolutionsHome"
          className={`nav-link ${location.pathname === '/SolutionsHome' ? 'active' : ''}`}
          onClick={() => { closeDropdowns(); onLinkClick(); }}
        >
          Solutions
        </Link>
        <Link
          to="/AboutUs"
          className={`nav-link ${location.pathname === '/AboutUs' ? 'active' : ''}`}
          onClick={() => { closeDropdowns(); onLinkClick(); }}
        >
          About Us
        </Link>
        <Link
          to="/Contact"
          className={`nav-link ${location.pathname === '/Contact' ? 'active' : ''}`}
          onClick={() => { closeDropdowns(); onLinkClick(); }}
        >
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Header;
