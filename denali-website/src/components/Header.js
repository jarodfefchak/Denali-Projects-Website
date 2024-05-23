import React from "react";
import { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton'; 
import {Link} from 'react-router-dom';
import Logo from '../images/Logos/Denali_Logo_Black_Transparent_BG.png'
import Projects from "./Projects";
import DropdownMenu from "./DropdownMenu";


function Header(){
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };
  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };


    return(
        <div>
            <div style = {gradient}>
              <div style = {navbarStyle}>
            <img src = {Logo}  alt = "Logo" height = "75vh" style = {{marginLeft:"8vw"}} />
            <div style = {linkContainerStyle}>
                <Link to = "/" style = {linkStyle}>Home</Link>
                <Link to = "/Solutions" style = {linkStyle}>Solutions</Link>
                <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <p style={linkStyle}>Projects</p>
          <div style ={menu}>
          {isDropdownVisible && <DropdownMenu />}
          </div>
        </div>
                <Link to = "/AboutUs" style = {linkStyle}>About Us</Link>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Header;

const gradient = {
  position: 'relative',
  top:0,
  left: 0,
  width: '100%',
  height: '4px', 
  backgroundImage: 'linear-gradient(180deg, #ffffff, #808080)',
};
const navbarStyle = {
    position:"fixed",
    display: 'flex',
    justifyContent: 'space-between', // Align items horizontally
    alignItems: 'center', // Vertically center items
    backgroundColor:"white",
    width:"100vw",
  };

  const linkContainerStyle = {
    display: 'flex', // Create a flex container for the links
    alignItems: 'center', // Vertically center the links
    marginRight:"35px",

  };

  const linkStyle = {
    border:"none",
    color: 'black',
    textDecoration: 'none',
    padding: '10px', 
    fontSize: "16pt",
  };
  const menu = {
    position: 'absolute',
    backgroundColor:"white",
    top: 75, /* Position the dropdown below the button */
  }