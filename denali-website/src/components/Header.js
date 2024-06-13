import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Logo from '../images/Logos/Denali_Logo_White_Transparent_BG.png';
import './header.css';
import axios from "axios";

function Header() {
  const [jsonData, setJsonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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

  if (loading) {
    return <p>Loading data...</p>;
  }

  return (
    <div>
      <div className="navbar">
        <Link to="/#HomeMainSection">
          <img src={Logo} alt="Logo" height="75px" className="Denali-Logo" />
        </Link>
        <div className="link-container">
          <Link to="/#HomeMainSection" id="link1" className="nav-link">Home</Link>
          <div className="dropdown" id="link2">
            <Link to="/#Solutions" className="dropdown-toggle nav-link">Solutions</Link>
            <div className="dropdown-menu">
              {jsonData.map((data, index) => (
                <Link
                  key={index}
                  to={`/SolutionsDisplay/${index + 1}`}
                  className="dropdown-item"
                >
                  {data[0].section}
                </Link>
              ))}
            </div>
          </div>
          <Link to="/AboutUs" id="link3" className="nav-link">About Us</Link>
          <Link to="/Contact" id="link4" className="nav-link">Contact</Link>
        </div>
        <div className="menu-icon" onClick={toggleDropdown}>
          ☰
        </div>
      </div>
      <div className={`mobile-dropdown-menu ${isDropdownOpen ? 'open' : ''}`}>
        <Link to="/#HomeMainSection" className="nav-link" onClick={toggleDropdown}>Home</Link>
        <div className="dropdown">
          <Link to="/#Solutions" className="dropdown-toggle nav-link" onClick={toggleDropdown}>Solutions</Link>
          <div className="dropdown-menu">
            {jsonData.map((data, index) => (
              <Link
                key={index}
                to={`/SolutionsDisplay/${index + 1}`}
                className="dropdown-item"
                onClick={toggleDropdown}
              >
                {data[0].section}
              </Link>
            ))}
          </div>
        </div>
        <Link to="/AboutUs" className="nav-link" onClick={toggleDropdown}>About Us</Link>
        <Link to="/Contact" className="nav-link" onClick={toggleDropdown}>Contact</Link>
      </div>
    </div>
  );
}

export default Header;



