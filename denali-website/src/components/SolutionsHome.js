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
import Solution7 from "../images/Solutions/Solution7.jpg";
import Solution8 from "../images/Solutions/Solution8.jpg";
import Solution9 from "../images/Solutions/Solution9.jpg";
import axios from "axios";
import "./SolutionsHome.css";
import Footer from "./Footer";

function Solutions() {
  const [visibility, setVisibility] = useState({});
  const [jsonData, setJsonData] = useState([]);
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
    // { src: Solution7, alt: "Solution 7" },
    // { src: Solution8, alt: "Solution 8" },
    // { src: Solution9, alt: "Solution 9" },
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
          <b>Solutions We Offer</b>
        </h1>
        <p className="descriptionSH">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit
          amet accumsan tortor. Curabitur malesuada, lorem in fermentum
          pellentesque, orci ex interdum ligula, et egestas nunc mauris non
          nisi. Morbi nec lorem ut orci interdum scelerisque. Duis tincidunt
          mauris vitae libero convallis, a malesuada risus venenatis. Sed ac
          eros eu felis fringilla facilisis. Nullam quis diam a libero accumsan
          volutpat. Suspendisse potenti. Praesent faucibus, nisi in cursus
          fringilla, lacus arcu dictum tortor, nec tempus justo turpis id lacus.
          Maecenas scelerisque sapien at tortor cursus, ac lacinia neque
          ullamcorper. Aenean ut ultricies lorem. Phasellus id ipsum vel velit
          tristique aliquam. Curabitur consectetur ligula non arcu commodo,
          vitae interdum orci gravida. Fusce semper dictum nunc in finibus. Sed
          pulvinar volutpat purus, a varius libero condimentum nec. Curabitur
          lacinia ultricies turpis sit amet dignissim. Proin consequat, metus ut
          facilisis accumsan, elit erat congue mauris, non fringilla odio sapien
          sit amet sapien.
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
        {/* <div className="buttonContainerS">
        <Link to="/Contact">
          <button
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className={`buttonS ${hover ? "button-hoverS" : ""}`}
          >
            Contact Us
          </button>
        </Link>
      </div> */}
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
