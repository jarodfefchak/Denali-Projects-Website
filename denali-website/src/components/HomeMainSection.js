import React from "react";
import Header from "./Header";
import Image from "../images/Home_Page.jpg";
function HomeMainSection(){
    return(
            <div style = {headImage}>
                <Header/>
                <p style = {MainSection}>Enhancing Performance and Sustainability with EPC Expertise</p>
            </div>
        
        );
}
export default HomeMainSection;

const headImage = {
    backgroundImage: `url(${Image})`,
    backgroundSize: "cover",
    height: "100vh",
    backgroundRepeat: "no-repeat",
    margin: "0px",
    padding: "0px",
};

const MainSection = {
    display : "flex",
    alignItems: "center",
    color:"blue",
    fontSize:"6em",
    textAlign:"center",
    marginLeft: "75px",
    marginRight: "75px",
    height: "40%",
};
