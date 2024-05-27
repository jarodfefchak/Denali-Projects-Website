import React from "react";
import { Link } from 'react-router-dom';
import Logo from '../images/Logos/Denali_Logo_Black_Transparent_BG.png';
import Dropdown from 'react-bootstrap/Dropdown';
import './header.css';
function Header() {
  const dropdownToggleStyles = {
    color: 'black',
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: '16pt',
  };
  const dropDownMenu = {
    border: "none"
  };

  return (
    <div>
      <div style={navbarStyle}>
        <img src={Logo} alt="Logo" height="75vh" style={{ marginLeft: "150px", marginTop:"15px"}} />
        <div style={linkContainerStyle}>
          <Link to="/" id = "link1" style={linkStyle}>Home</Link>
          <Dropdown id= "link2">
            <Dropdown.Toggle style={dropdownToggleStyles} variant="success" id="dropdown-basic">
              Solutions
            </Dropdown.Toggle>
            <Dropdown.Menu style={dropDownMenu}>
              <Dropdown.Item href="#/action-1">FEED Studies</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Brown and Greenfield Projects</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Conventional Oil Facilities</Dropdown.Item>
              <Dropdown.Item href="#/action-1">Well Pads</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Sweet/Sour Gas and Liquid Processing Facilities</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Compressor Stations</Dropdown.Item>
              <Dropdown.Item href="#/action-1">Produced Water Treatment/Storage/Injection</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Well Tie Ins and Gathering Systems</Dropdown.Item>
              <Dropdown.Item href="#/action-3">LACT Units</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Link to="/AboutUs"  id = "link3"style={linkStyle}>About Us</Link>
          <Link to="/Contact"  id = "link4"style={linkStyle}> Contact</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;


const navbarStyle = {
  position: "fixed",
  display: 'flex',
  justifyContent: 'space-between', // Align items horizontally
  alignItems: 'center', // Vertically center items
  backgroundColor: "white",
  width: "100vw",
  zIndex:"1000",
};

const linkContainerStyle = {
  display: 'flex', // Create a flex container for the links
  alignItems: 'center', // Vertically center the links
  marginRight: "35px",

};
const linkStyle = {
  border: "none",
  color: 'black',
  textDecoration: 'none',
  padding: '10px',
  fontSize: "16pt",
};
