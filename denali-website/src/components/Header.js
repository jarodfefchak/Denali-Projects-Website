import React from "react";
import {Link} from 'react-router-dom';

function Header(){
    return(
        <div>
            <div style = {logoContainer}>
            {//need to add link to logo image
            }
            </div>
            <div style = {navbarStyle}>
                <Link to = "/" style = {linkStyle}>Home</Link>
            </div>
        </div>
    );
};

export default Header;

const logoContainer = {

};

const navbarStyle = {
    display: 'flex',
    justifyContent: 'right',
    margin: "15px",

};
const linkStyle = {
    color: 'black',
    textDecoration: 'none',
}