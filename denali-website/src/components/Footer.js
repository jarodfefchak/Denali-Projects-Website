import React from "react";
import {Link} from 'react-router-dom';
import './Footer.css';

function Footer(){
    return(
        <div className = "background"> 
            <div className = "items">
            <div id = "item1">
                <h4>Let's Talk</h4>
                <p>#1500, 700 - 4th Avenue SW Calgary, AB T2P 3J4</p>
                <p>info@denaliprojects.com</p>
                <p>+1 (403) 984-6610</p>
            </div>
            <div id = "item2">
                <h4>Company</h4> 
                <p>test</p>
            </div>
            <div id = "item3">
                <h4>Accreditations</h4> 
                <p>image 1</p>
                <p>image 2</p>
                <p>image 3</p>
                <p>image 4</p>
            </div>
            </div>
        </div>

    );
};
export default Footer;

