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
    document.title = "About - Denali Projects";
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
        <div className="paragraphAU">
          <p>
            Since our inception, Denali has had the pleasure and experience to
            work with numerous midstreamers and producers in the Western
            Canadian oil and gas sector. The range of these projects has varied
            in scope, including FEED studies & routine MOCs to new green field
            facilities. Denali prides itself on being an efficient and valuable
            service provider to our clients.
          </p>
          <p>
            Many elements of various projects fit well with Denali's areas of
            expertise. Our core team has considerable experience with Brownfield
            projects. Denali has completed multiple FEED, detailed design and
            MOC projects. Through our experience with energy projects, we have
            gained a deep understanding and knowledge base of different
            facilities, processes, and operations, and have developed excellent
            working relationships with our clients’ management, operations and
            construction teams; With this knowledge and experience, Denali can
            provide valuable insight into real, implementable solutions, while
            considering operational concerns for any project.
          </p>
          <p>
            Denali is a great fit to work with your project team and Operations
            staff to provide the quality FEED deliverables required for our
            clients to evaluate the economics of the project while using a lean,
            fit-for-purpose project team.
          </p>
          <p>
            Contact us to learn more about how we can provide our services to
            your next project.
          </p>
          <p id="sloganAU">
            <b>
              Fueling Success Together: EPC Solutions for the Oil & Gas Industry
            </b>
          </p>
        </div>
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
