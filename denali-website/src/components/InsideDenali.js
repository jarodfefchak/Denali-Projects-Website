import React, { useEffect, useState } from "react";
import InsideImage from "../images/InsideDenali.jpg";
import { Link } from "react-router-dom";
import axios from 'axios';
import "./InsideDenali.css";

function InsideDenali() {
  const [hover, setHover] = useState(false);
  const [jsonData, setJsonData] = useState(null);
  const [jsonData2, setJsonData2] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/data/Headings.json`);
        setJsonData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/data/Text.json`);
        setJsonData2(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  if (!jsonData || !jsonData2) {
    return;
  }

  return (
    <div style={background}>
      <div className="contentID">
        <img src={InsideImage} alt="inside denali" className="imgID" />
        <div className="textID">
          <p className="headerID">
            <b>{jsonData[0].inside} </b>
          </p>
          <p>
           {jsonData2[0].insideText}
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
  backgroundColor: "#f6f6f6",
  backgroundSize: "cover",
  margin: "0px",
  padding: "0px",
};


