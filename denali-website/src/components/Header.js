import React, { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import Logo from '../images/Logos/Denali_Logo_White_Transparent_BG.png';
import './header.css';
import axios from "axios";

function Header({ onLinkClick }) {
  const [jsonData, setJsonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const promises = [];
        for (let i = 1; i <= 9; i++) {
          promises.push(axios.get(`/data/Solutions/Solution${i}.json`));
        }
        const responses = await Promise.all(promises);
        const data = responses.map(response => response.data);
        setJsonData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

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

  if (loading) {
    return <p>Loading data...</p>;
  }

  return (
    <div className="navbar">
      <Link to="/#HomeMainSection" onClick={onLinkClick}>
        <img src={Logo} alt="Logo" height="75px" className="Denali-Logo" />
      </Link>
      <div className="link-container">
        <Link
          to="/#HomeMainSection"
          id="link1"
          className={`nav-link ${location.hash === '#HomeMainSection' || location.pathname === '/' ? 'active' : ''}`}
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
      <div className="menu-icon" onClick={toggleDropdown}>
        {isDropdownOpen ? '✖' : '☰'}
      </div>
      <div className={`mobile-dropdown-menu ${isDropdownOpen ? 'open' : ''}`}>
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

