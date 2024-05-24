import React from "react";
import { Link } from 'react-router-dom';
import Logo from '../images/Logos/Denali_Logo_Black_Transparent_BG.png';
import Dropdown from 'react-bootstrap/Dropdown';

function Header() {
  const dropdownToggleStyles = {
    color: 'black', 
    backgroundColor: 'transparent', 
    border: 'none', 
    fontSize: '16pt', 
  };
  const dropDownMenu ={
      border:"none"
  };

  return (
    <div>
      <div style={gradient}>
        <div style={navbarStyle}>
          <img src={Logo} alt="Logo" height="75vh" style={{ marginLeft: "8vw" }} />
          <div style={linkContainerStyle}>
            <Link to="/" style={linkStyle}>Home</Link>
            <Dropdown> 
              <Dropdown.Toggle style={dropdownToggleStyles} variant="success" id="dropdown-basic">
                Projects
              </Dropdown.Toggle>
              <Dropdown.Menu style = {dropDownMenu}>
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
            <Link to="/Solutions" style={linkStyle}>Solutions</Link>
            <Link to="/AboutUs" style={linkStyle}>About Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;


const gradient = {
  position: 'relative',
  top: 0,
  left: 0,
  width: '100%',
  height: '4px',
  backgroundImage: 'linear-gradient(180deg, #ffffff, #808080)',
};
const navbarStyle = {
  position: "fixed",
  display: 'flex',
  justifyContent: 'space-between', // Align items horizontally
  alignItems: 'center', // Vertically center items
  backgroundColor: "white",
  width: "100vw",
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
