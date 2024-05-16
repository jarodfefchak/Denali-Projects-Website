import React from "react";
import {Link} from 'react-router-dom';

function Header(){
    return(
        <div>
            <div style = {logoContainer}>
                <img src='./../images/Logos/Denali_Logo_Black_Transparent_BG.png' alt = "Logo" width ='100px'/>
            </div>
            <div style = {navbarStyle}>
                <Link to = "/" style = {linkStyle}>Home</Link>
                <Link to = "/CareersPage" style = {linkStyle}>Careers</Link>
            </div>
        </div>
    );
};

export default Header;

const logoContainer = {
    display: 'flex',
    justifyContent: 'space-between',
    margin: "15px",
};

const navbarStyle = {
    display: 'flex',
    justifyContent: 'right',


};
const linkStyle = {
    color: 'black',
    textDecoration: 'none',
    padding:"20px",
};