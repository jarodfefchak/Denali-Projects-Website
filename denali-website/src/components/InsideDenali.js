import React, { useEffect, useState, useMemo, useCallback } from "react";
import InsideImage from "../images/InsideDenali.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";
import axios from 'axios';
import "./InsideDenali.css";

function InsideDenali() {
  const [hover, setHover] = useState(false);
  const [data, setData] = useState({ jsonData: null, jsonData2: null });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibility, setVisibility] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [response1, response2] = await Promise.all([
          axios.get(`/data/Headings.json`),
          axios.get(`/data/Text.json`)
        ]);
        setData({ jsonData: response1.data, jsonData2: response2.data });
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleMouseEnter = useCallback(() => setHover(true), []);
  const handleMouseLeave = useCallback(() => setHover(false), []);
  
  const handleVisibilityChange = (isVisible) => {
    if (isVisible) {
      setVisibility(true);
    }
  };

  const background = useMemo(() => ({
    backgroundColor: "#f6f6f6",
    backgroundSize: "cover",
    margin: "0px",
    padding: "0px",
  }), []);

  if (loading) {
    return null;
  }

  if (error) {
    return <div>Error loading data</div>;
  }

  if (!data.jsonData || !data.jsonData2) {
    return null;
  }
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 2.5,
        delay: 0.2,
        duration: 1.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div style={background}>
      <div className="contentID">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <VisibilitySensor
            onChange={handleVisibilityChange}
            partialVisibility
          >
            {({ isVisible }) => (
              <motion.div
                variants={itemVariants}
                initial="hidden"
                animate={visibility ? "visible" : "hidden"}
                className="imageContainerS"
              >
                <img src={InsideImage} alt="inside denali" className="imgID" loading="lazy" />
              </motion.div>
            )}
          </VisibilitySensor>
        </motion.div>
        <div className="textID">
          <p className="headerID">
            <b>{data.jsonData[0].inside}</b>
          </p>
          <p>{data.jsonData2[0].insideText}</p>
          <Link to="/AboutUs">
            <button
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
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

