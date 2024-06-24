import React from "react";

import wLogo from '../images/Logos/Denali_Logo_White_Transparent_BG.png';
import LinkedIn from '../images/Logos/LinkedInLogoBW.png';
import APEGA from '../images/Accreditations/APEGA.png';
import APEGS from '../images/Accreditations/APEGS.png';
import EGBC from '../images/Accreditations/EGBC.png';
import NAPEG from '../images/Accreditations/NAPEG.png';

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
                <a href ="https://www.linkedin.com/company/denali-projects-ltd">
                <img src ={LinkedIn} alt ="LinkedIn" id = 'LinkedIn' />
                </a>
            </div>
            <div id = "item2">
                <h4>Company</h4> 
                <p>SharePoint Login</p>
                <br></br>
                <img src={wLogo} alt="Logo"/>
            </div>
            <div id = "item3">
                <h4 style={{fontWeight:"600"}}>Accreditations</h4> 
                <img src={APEGA} alt="Logo" id = "Accred1"  />
                <img src={APEGS} alt="Logo" id = "Accred2"  />
                <img src={EGBC} alt="Logo" id = "Accred3" />
                <img src={NAPEG} alt="Logo" id = "Accred4"  />
            </div>
        </div>
        <p style = {{fontSize:"14px", color:"white", textAlign:"center", paddingBottom:"20px"}}>Copyright &copy; 2024 Denali Projects Ltd. </p>
        </div>

    );
};

export default Footer;

