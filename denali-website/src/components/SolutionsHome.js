import React, { useState, useEffect } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";
import Solution1 from "../images/Solutions/Solution1.jpg";
import Solution2 from "../images/Solutions/Solution2.jpg";
import Solution3 from "../images/Solutions/Solution3.jpg";
import Solution4 from "../images/Solutions/Solution4.jpg";
import Solution5 from "../images/Solutions/Solution5.jpg";
import Solution6 from "../images/Solutions/Solution6.jpg";
// import Solution7 from "../images/Solutions/Solution7.jpg";
// import Solution8 from "../images/Solutions/Solution8.jpg";
// import Solution9 from "../images/Solutions/Solution9.jpg";
import axios from "axios";
import "./SolutionsHome.css";
import Footer from "./Footer";

function Solutions() {
  const [visibility, setVisibility] = useState({});
  const [jsonData, setJsonData] = useState([]);
  const [jsonData2, setJsonData2] = useState([]);
  const [jsonData3, setJsonData3] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleVisibilityChange = (index, isVisible) => {
    if (isVisible && !visibility[index]) {
      setVisibility((prev) => ({ ...prev, [index]: true }));
    }
  };
  useEffect(() => {
    document.title = "Solutions - Denali Projects";
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const promises = [];
        for (let i = 1; i <= 9; i++) {
          promises.push(axios.get(`/data/Solutions/Solution${i}.json`));
        }
        const responses = await Promise.all(promises);
        const data = responses.map((response) => response.data);
        setJsonData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/data/Headings.json`);
        setJsonData2(response.data);
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
        setJsonData3(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <p>Loading data...</p>;
  }

  const images = [
    { src: Solution1, alt: "Solution 1" },
    { src: Solution2, alt: "Solution 2" },
    { src: Solution3, alt: "Solution 3" },
    { src: Solution4, alt: "Solution 4" },
    { src: Solution5, alt: "Solution 5" },
    { src: Solution6, alt: "Solution 6" },
    // { src: Solution4, alt: "Solution 7" },
    // { src: Solution5, alt: "Solution 8" },
    // { src: Solution6, alt: "Solution 9" },
  ];

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
        delay: 0.2,
        duration: 1.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div>
      <Header />
      <div style={background}>
        <h1 className="headingSH">
          <b>{jsonData2[0]?.solutions}</b>
        </h1>
        <p className="descriptionSH">
          {jsonData3[0]?.solutionHomePage}
        </p>
        <motion.div
          className="solutionsSH"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {images.map((image, index) => (
            <VisibilitySensor
              key={index}
              onChange={(isVisible) => handleVisibilityChange(index, isVisible)}
              partialVisibility
            >
              {({ isVisible }) => (
                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  animate={visibility[index] ? "visible" : "hidden"}
                  className="imageContainerSH"
                >
                  <Link to={`/SolutionsDisplay/${index + 1}`}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="imgSH"
                      loading="lazy"
                    />
                    <p className="textSH">{jsonData[index][0].section}</p>
                  </Link>
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

export default Solutions;

const background = {
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#f6f6f6",
  backgroundSize: "cover",
  margin: "0px",
  padding: "0px",
};
