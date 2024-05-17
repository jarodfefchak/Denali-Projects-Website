import React from "react";
import {Link} from 'react-router-dom';
import Logo from '../images/Logos/Denali_Logo_Black_Transparent_BG.png'

function Header(){
    return(
        <div>
            <div style = {navbarStyle}>
            <img src = {Logo}  alt = "Logo" width = "150px" />
            <div style = {linkContainerStyle}>
                <Link to = "/" style = {linkStyle}>Home</Link>
                <Link to = "/Solutions" style = {linkStyle}>Solutions</Link>
                <Link to = "/CareersPage" style = {linkStyle}>Careers</Link>
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
    backgroundColor: 'grey', // Set your desired background color
  };

  const linkContainerStyle = {
    display: 'flex', // Create a flex container for the links
    alignItems: 'center', // Vertically center the links
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    padding: '0 10px', // Adjust padding as needed
  };
