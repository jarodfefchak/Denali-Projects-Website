import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import BradImg from "../images/AboutUs/BradMeaney.jpg";
import JarodImg from "../images/AboutUs/JarodFefchak.jpg";
import DeanImg from "../images/AboutUs/DeanKirkby.jpg";
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
            <p className="img-textAU">Brad Meaney</p>
            <p className="img-textAU">Principal</p>
            <p className="img-textAU">Instrumentation Lead</p>
          </div>
          <div className="imgcontainerAU">
            <img className="imgAU" src={JarodImg} alt="Jarod Fechak" loading="lazy" />
            <p className="img-textAU">Jarod Fefchak, P.Eng.</p>
            <p className="img-textAU">Principal</p>
            <p className="img-textAU">Electrical Lead</p>
          </div>
          <div className="imgcontainerAU">
            <img className="imgAU" src={DeanImg} alt="Dean Kirkby" loading="lazy" />
            <p className="img-textAU">Dean Kirkby, P.Eng.</p>
            <p className="img-textAU">Principal</p>
            <p className="img-textAU">Engineering Lead</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;

