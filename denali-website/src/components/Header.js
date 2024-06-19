import React, { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import Logo from '../images/Logos/Denali_Logo_White_Transparent_BG.png';
import './header.css';
import axios from "axios";

function Header({ onLinkClick }) {
  const [jsonData, setJsonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSolutionsDropdownOpen, setIsSolutionsDropdownOpen] = useState(false);
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

  const toggleMainDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleSolutionsDropdown = () => {
    setIsSolutionsDropdownOpen(!isSolutionsDropdownOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 750) {
        setIsDropdownOpen(false);
        setIsSolutionsDropdownOpen(false);
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
    <div>
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
          <div className="dropdown" id="link2">
            <Link
              to="/#Solutions"
              className={`dropdown-toggle nav-link ${isSolutionsDropdownOpen ? 'dropdown-open' : location.hash === '#Solutions' ? 'active-solutions' : ''}`}
              onClick={() => { onLinkClick(); toggleSolutionsDropdown(); }}
            >
              Solutions
            </Link>
            <div className="dropdown-menu">
              {jsonData.map((data, index) => (
                <Link
                  key={index}
                  to={`/SolutionsDisplay/${index + 1}`}
                  className="dropdown-item"
                  onClick={onLinkClick}
                >
                  {data[0].section}
                </Link>
              ))}
            </div>
          </div>
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
        <div className="menu-icon" onClick={toggleMainDropdown}>
          {isDropdownOpen ? '✖' : '☰'}
        </div>
      </div>
      <div className={`mobile-dropdown-menu ${isDropdownOpen ? 'open' : ''}`}>
        <Link
          to="/#HomeMainSection"
          className={`nav-link ${location.hash === '#HomeMainSection' || location.pathname === '/' ? 'active' : ''}`}
          onClick={() => { toggleMainDropdown(); onLinkClick(); }}
        >
          Home
        </Link>
        <div className={`dropdown ${isSolutionsDropdownOpen ? 'open' : ''}`}>
          <div className="dropdown-toggle nav-link" onClick={toggleSolutionsDropdown}>Solutions</div>
          <div className="dropdown-menu">
            {jsonData.map((data, index) => (
              <Link
                key={index}
                to={`/SolutionsDisplay/${index + 1}`}
                className="dropdown-item"
                onClick={() => { toggleMainDropdown(); onLinkClick(); }}
              >
                {data[0].section}
              </Link>
            ))}
          </div>
        </div>
        <Link
          to="/AboutUs"
          className={`nav-link ${location.pathname === '/AboutUs' ? 'active' : ''}`}
          onClick={() => { toggleMainDropdown(); onLinkClick(); }}
        >
          About Us
        </Link>
        <Link
          to="/Contact"
          className={`nav-link ${location.pathname === '/Contact' ? 'active' : ''}`}
          onClick={() => { toggleMainDropdown(); onLinkClick(); }}
        >
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Header;

