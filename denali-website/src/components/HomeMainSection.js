import React from "react";
import Image from "../images/Home_Page.jpg";

function HomeMainSection() {
  return (
    <div style={headImage}>
      <p style={MainSection}>Enhancing Performance and Sustainability with EPC Expertise</p>
    </div>
  );
}

const MainSection = {
  display: "flex",
  justifyContent:"center",
  alignItems: "center",
  color: "black",
  fontSize: "50pt",
  textAlign: "center",
};

const headImage = {
    display:"flex",
  backgroundImage: `url(${Image})`,
  backgroundSize: "cover",
  height: "100vh",
  backgroundRepeat: "no-repeat",
  margin: "0px",
  padding: "0px",
};

export default HomeMainSection;