import React, { useState } from "react";
import InsideImage from "../images/InsideDenali.jpg";
import { Link } from "react-router-dom";
import "./InsideDenali.css";

function InsideDenali() {
  const [hover, setHover] = useState(false);

  return (
    <div style={background}>
      <div className="contentID">
        <img src={InsideImage} alt="inside denali" className="imgID" />
        <div className="textID">
          <p className="headerID">
            <b>Inside Denali </b>
          </p>
          <p>
            Founded in 2016, Denali Projects has been dedicated to delivering
            top-tier project management and engineering solutions in the energy
            industry. We prioritize client satisfaction by fostering strong
            partnerships and delivering projects that meet the highest
            standards of quality and safety. Our mission is to turn complex
            challenges into successful outcomes, making us a trusted partner in
            the EPC industry.
          </p>
          <Link to="/AboutUs">
            <button
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              className={`buttonID ${hover ? "button-hoverID" : ""}`}
            >
              Discover Who We Are
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default InsideDenali;

const background = {
  backgroundColor: "#9db3c1",
  backgroundSize: "cover",
  margin: "0px",
  padding: "0px",
};
