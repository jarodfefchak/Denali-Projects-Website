import React from "react";

function CareersPage(){
    return(
        <div style = {background}>
            <div style = {text}>
            <p style = {{fontSize:"3.5em"}}><b>Your Future With Denali</b></p>
            <p style = {{fontSize:"1.5em"}}>Let's build the future of energy together.</p>
            <p style = {{fontSize:"1.5em"}}>Are you ready to power up your career with a dynamic and innovative company in the energy sector?
                At Denali, you will work on exciting projects that drive sustainable solutions, collaborate with 
                industry experts, and grow your career in a supportive and forward-thinking environment. If you're passionate
                about making a real impact and eager to be a part of a company that values creativity, integrity, and excellence, Denali is the 
                perfect place for you.
            </p>
            </div>
        </div>
    );
};
export default CareersPage;
const background = {
    color: "white",
    backgroundColor: "#374f59",
    backgroundSize:"cover",
    height: "79vh",
    margin: "0px",
    padding: "0px",
};

const text ={
    display:"flex",
    flexDirection:"column",
    marginLeft: "5%",
    marginRight:"12.5%",
};