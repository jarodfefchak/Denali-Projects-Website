import React from "react";
import {Link} from 'react-router-dom';
import Logo from '../images/Logos/Denali_Logo_Black_Transparent_BG.png'

function Header(){
    return(
        <div>
            <div style = {navbarStyle}>
            <img src = {Logo}  alt = "Logo" height = "75vh" style = {{marginLeft:"10vw"}} />
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
    marginRight:"30px",

  };

  const linkStyle = {
    color: 'black',
    textDecoration: 'none',
    padding: '10px', 
    fontSize: "16pt",
  };
