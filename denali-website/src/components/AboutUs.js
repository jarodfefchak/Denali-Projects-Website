import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import BradImg from "../images/AboutUs/BradMeaney.jpg";
import JarodImg from "../images/AboutUs/JarodFefchak.jpg";
import DeanImg from "../images/AboutUs/DeanKirkby.jpg";
import "./AboutUs.css";

function AboutUs() {
  useEffect(() => {
    document.title = "About Us - Denali Projects";
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  const [hover, setHover] = useState(false);

  return (
    <div>
      <Header />
      <div className="contentAU">
        <p className="header-textAU">
          <b>Inside Denali </b>
        </p>
        <p className="sub-header-textAU">About Us</p>
          <p className="paragraphAU">
            Since our inception, Denali has had the pleasure and experience to
            work with numerous midstreamers and producers in the Western
            Canadian oil and gas sector. The range of these projects has varied
            in scope, including FEED studies & routine MOCs to new green field
            facilities. Denali prides itself on being an efficient and valuable
            service provider to our clients.
          </p>
          <p className="paragraphAU" >
            Denali is a great fit to work with your project team and Operations
            staff to provide the quality FEED deliverables required for our
            clients to evaluate the economics of the project while using a lean,
            fit-for-purpose project team.
          </p>
          <p className="paragraphAU">
            Contact us to learn more about how we can provide our services to
            your next project.
          </p>
          <p id="sloganAU">
            <b>
              Fueling Success Together: EPC Solutions for the Oil & Gas Industry
            </b>
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
            <img className="imgAU" src={BradImg} alt="Brad Meaney"  loading="lazy"/>
            <p className="img-textAU">Brad Meaney</p>
            <p className="img-textAU">Principal</p>
            <p className="img-textAU">Instrumentation Lead</p>
          </div>
          <div className="imgcontainerAU">
            <img className="imgAU" src={JarodImg} alt="Jarod Fechak"  loading="lazy" />
            <p className="img-textAU">Jarod Fefchak</p>
            <p className="img-textAU">Principal</p>
            <p className="img-textAU">Electrical Lead</p>
          </div>
          <div className="imgcontainerAU">
            <img className="imgAU" src={DeanImg} alt="Dean Kirkby"  loading="lazy"/>
            <p className="img-textAU">Dean Kirkby</p>
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
