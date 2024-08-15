import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import BradImg from "../images/AboutUs/BradMeaney.jpg";
import JarodImg from "../images/AboutUs/JarodFefchak.jpg";
import DeanImg from "../images/AboutUs/DeanKirkby.jpg";
import LinkedInB from "../images/Logos/LinkedInBB.png";
import "./AboutUs.css";

function AboutUs() {
  const [visibility, setVisibility] = useState({});
  const [jsonData, setJsonData] = useState(null);
  const [jsonData2, setJsonData2] = useState(null);
  const [hover, setHover] = useState(false);

  const handleVisibilityChange = (index, isVisible) => {
    if (isVisible && !visibility[index]) {
      setVisibility((prev) => ({ ...prev, [index]: true }));
    }
  };

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
    return null;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 2.5,
        delay: 0.1,
        duration: 1.2,
        ease: "easeInOut",
      },
    },
  };

  const teamMembers = [
    { img: BradImg, name: "Brad Meaney", title: "Principal", role: "Instrumentation Lead", linkedin: "https://www.linkedin.com/in/brad-meaney-946b6158/" },
    { img: JarodImg, name: "Jarod Fefchak, P.Eng.", title: "Principal", role: "Electrical Lead", linkedin: "https://www.linkedin.com/in/jarod-fefchak/" },
    { img: DeanImg, name: "Dean Kirkby, P.Eng.", title: "Principal", role: "Engineering Lead", linkedin: "https://www.linkedin.com/in/dean-kirkby-274a3a149/" },
  ];

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
        <motion.div
          className="teamAU"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {teamMembers.map((member, index) => (
            <VisibilitySensor
              key={index}
              onChange={(isVisible) => handleVisibilityChange(index, isVisible)}
              partialVisibility
            >
              {({ isVisible }) => (
                <motion.div
                  className="imgcontainerAU"
                  variants={itemVariants}
                  initial="hidden"
                  animate={visibility[index] ? "visible" : "hidden"}
                >
                  <img className="imgAU" src={member.img} alt={member.name} loading="lazy" />
                  <div className="img-detailsAU">
                    <div className="text-containerAU">
                      <p className="img-textAU">{member.name}</p>
                      <p className="img-textAU">{member.title}</p>
                      <p className="img-textAU">{member.role}</p>
                    </div>
                    <div className="lineAU"></div>
                    <a href={member.linkedin}>
                      <img src={LinkedInB} alt="LinkedIn" className="linkedinAU" loading="lazy" />
                    </a>
                  </div>
                </motion.div>
              )}
            </VisibilitySensor>
          ))}
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
