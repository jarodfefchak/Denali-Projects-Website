import React from "react";
import { Link } from 'react-router-dom';
import Logo from '../images/Logos/Denali_Logo_White_Transparent_BG.png';
import Dropdown from 'react-bootstrap/Dropdown';
import './header.css';

function Header() {
  return (
    <div>
      <div className = "navbar">
        <img src={Logo} alt="Logo" height="75px"  className ="Denali-Logo" />
        <div className="link-container">
          <Link to="/" id="link1" className="nav-link">Home</Link>
          <Dropdown id="link2">
            <Dropdown.Toggle as={Link} to="/#Solutions" className="dropdown-toggle" variant="success" id="dropdown-basic" >
              Solutions
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu">
              <Dropdown.Item href="./SolutionsDisplay">FEED Studies</Dropdown.Item>
              <Dropdown.Item href="./SolutionsDisplay">Brown and Greenfield Projects</Dropdown.Item>
              <Dropdown.Item href="./SolutionsDisplay">Conventional Oil Facilities</Dropdown.Item>
              <Dropdown.Item href="./SolutionsDisplay">Well Pads</Dropdown.Item>
              <Dropdown.Item href="./SolutionsDisplay">Sweet/Sour Gas and Liquid Processing Facilities</Dropdown.Item>
              <Dropdown.Item href="./SolutionsDisplay">Compressor Stations</Dropdown.Item>
              <Dropdown.Item href="./SolutionsDisplay">Produced Water Treatment/Storage/Injection</Dropdown.Item>
              <Dropdown.Item href="./SolutionsDisplay">Well Tie Ins and Gathering Systems</Dropdown.Item>
              <Dropdown.Item href="./SolutionsDisplay">LACT Units</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Link to="/AboutUs" id="link3" className="nav-link">About Us</Link>
          <Link to="/Contact" id="link4" className="nav-link">Contact</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
