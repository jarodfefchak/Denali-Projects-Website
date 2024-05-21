import React from "react";
import {Link} from 'react-router-dom';
import Logo from '../images/Logos/Denali_Logo_Black_Transparent_BG.png'

function Header(){
    return(
        <div>
            <div style = {navbarStyle}>
            <img src = {Logo}  alt = "Logo" width = "300px" />
            <div style = {linkContainerStyle}>
                <Link to = "/" style = {linkStyle}>Home</Link>
                <Link to = "/Solutions" style = {linkStyle}>Solutions</Link>
                <Link to = "/AboutUs" style = {linkStyle}>About Us</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;


const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between', // Align items horizontally
    alignItems: 'center', // Vertically center items
    padding: '20px', // Add some padding for spacing
  };

  const linkContainerStyle = {
    display: 'flex', // Create a flex container for the links
    alignItems: 'center', // Vertically center the links
  };

  const linkStyle = {
    color: 'red',
    textDecoration: 'none',
    padding: '10px', 
    fontSize: "2em",
  };
