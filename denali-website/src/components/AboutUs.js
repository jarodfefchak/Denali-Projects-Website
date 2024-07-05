import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import BradImg from "../images/AboutUs/BradMeaney.jpg";
import JarodImg from "../images/AboutUs/JarodFefchak.jpg";
import DeanImg from "../images/AboutUs/DeanKirkby.jpg";
import LinkedInB from "../images/Logos/LinkedInBB.png";
import "./AboutUs.css";

function AboutUs() {
  const [jsonData, setJsonData] = useState(null);
  const [jsonData2, setJsonData2] = useState(null);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    document.title = "About Us - Denali Projects";
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

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
    <div>
      <Header />
      <div className="contentAU">
        <p className="header-textAU">
          <b>{jsonData[0].aboutUs}</b>
        </p>
        <p className="sub-header-textAU">{jsonData[0].aboutUsSub}</p>
        <p className="paragraphAU">{jsonData2[0].aboutTextLine1}</p>
        <p className="paragraphAU">{jsonData2[0].aboutTextLine2}</p>
        <p className="paragraphAU">{jsonData2[0].aboutTextLine3}</p>
        <p id="sloganAU">
          <b>{jsonData2[0].aboutTextLine4}</b>
        </p>
        <Link to="/Contact">
          <button
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className={`buttonAU ${hover ? "button-hoverAU" : ""}`}
          >
            Contact Us
          </button>
        </Link>
        <p className="executive-titleAU">Executive Team</p>
        <div className="teamAU">
          <div className="imgcontainerAU">
            <img className="imgAU" src={BradImg} alt="Brad Meaney" loading="lazy" />
            <div className="img-detailsAU">
              <div className="text-containerAU">
                <p className="img-textAU"style = {{padding:"0px"}}>Brad Meaney</p>
                <p className="img-textAU" style = {{padding:"0px"}}>Principal</p>
                <p className="img-textAU"style = {{padding:"0px"}}>Instrumentation Lead</p>
              </div>
              <div className="lineAU"></div>
              <a href="https://www.linkedin.com/in/brad-meaney-946b6158/">
                <img src={LinkedInB} alt="LinkedIn" className="linkedinAU" loading="lazy" />
              </a>
            </div>
          </div>
          <div className="imgcontainerAU">
            <img className="imgAU" src={JarodImg} alt="Jarod Fefchak" loading="lazy" />
            <div className="img-detailsAU">
              <div className="text-containerAU">
                <p className="img-textAU" style = {{padding:"0px"}}>Jarod Fefchak, P.Eng.</p>
                <p className="img-textAU" style = {{padding:"0px"}}>Principal</p>
                <p className="img-textAU"style = {{padding:"0px"}}>Electrical Lead</p>
              </div>
              <div className="lineAU"></div>
              <a href="https://www.linkedin.com/in/jarod-fefchak/">
                <img src={LinkedInB} alt="LinkedIn" className="linkedinAU" loading="lazy" />
              </a>
            </div>
          </div>
          <div className="imgcontainerAU">
            <img className="imgAU" src={DeanImg} alt="Dean Kirkby" loading="lazy" />
            <div className="img-detailsAU">
              <div className="text-containerAU">
                <p className="img-textAU"style = {{padding:"0px"}}>Dean Kirkby, P.Eng.</p>
                <p className="img-textAU" style = {{padding:"0px"}}>Principal</p>
                <p className="img-textAU"style = {{padding:"0px"}}>Engineering Lead</p>
              </div>
              <div className="lineAU"></div>
              <a href="https://www.linkedin.com/in/dean-kirkby-274a3a149/">
                <img src={LinkedInB} alt="LinkedIn" className="linkedinAU" loading="lazy" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
