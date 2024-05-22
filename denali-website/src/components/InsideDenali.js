import React from "react";
import { useState } from 'react';
import InsideImage from "../images/InsideDenali.jpg";
import {Link} from 'react-router-dom';

function InsideDenali(){

    const [hover,setHoverID] = useState(false);
    const button = {
    color: "white",
    backgroundColor:"#374f59",
    marginTop: "5vh",
    border: "0px",
    width:"400px",
    height:"90px",
    fontSize: "25pt",
    cursor: "pointer",
    ...(hover?{
      boxShadow: "1px 1px 20px #000000",
    }:null),
  };

    return(
        <div style = {background}>
            <div style = {content}>
            <img src = {InsideImage} alt = "inside denali" style = {img} />
                    <div style = {text}>
                    <p style = {{fontSize: "60pt"}}><b>Inside Denali </b></p>
                    <p style = {{fontSize: "20pt"}}>Founded in 2016, Denali Projects has been dedicated to delivering top-tier project management and engineering solutions in the energy industry. 
                        We prioritize client satisfaction by fostering strong partnerships and delivering projects that meet the highest standards of quality and safety. 
                        Our mission is to turn complex challenges into successful outcomes, making us a trusted partner in the EPC industry.</p>
                    <Link to = "/CareerOpportunities" >
                        <button onMouseEnter={() => setHoverID(true)}
                        onMouseLeave={() => setHoverID(false)} style = {button}>Discover Who We Are</button>
                    </Link>
                </div>
                </div>  
        </div>
    );
};

export default InsideDenali;

const background = {
    backgroundColor: "#9db3c1",
    backgroundSize:"cover",
    margin: "0px",
    padding: "0px",
};
const content ={
    display: 'flex',
    justifyContent:"center",
    alignItems: "center",
    padding: "40px",

};
const img = {
    width: "40vw",
    height: "80vh",
}
const text = {
    marginLeft:"100px",
    color: "white"
};
