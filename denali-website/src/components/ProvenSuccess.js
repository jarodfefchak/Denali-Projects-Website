import React, { useState, useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Project1Img from "../images/ProvenSuccess/Project1.jpg";
import Project2Img from "../images/ProvenSuccess/Project2.jpg";
import Project3Img from "../images/ProvenSuccess/Project3.jpg";
import axios from "axios";
import "./ProvenSuccess.css";

function ProvenSuccess() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showInfo, setShowInfo] = useState(false);
  const [hover, setHover] = useState(false);
  const [jsonData, setJsonData] = useState(null);
  const [jsonData2, setJsonData2] = useState(null);
  const [jsonData3, setJsonData3] = useState(null);
  const [jsonData4, setJsonData4] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [response1, response2, response3, response4] = await Promise.all([
          axios.get('/data/Projects/Project1.json'), 
          axios.get('/data/Projects/Project2.json'), 
          axios.get('/data/Projects/Project3.json'),
          axios.get('/data/Headings.json') 
        ]);
        setJsonData(response1.data);
        setJsonData2(response2.data);
        setJsonData3(response3.data);
        setJsonData4(response4.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return;
  }

  const handleDragStart = (e) => e.preventDefault();

  const items = [
    <div key="project1">
      <div
        className={`image-container ${
          showInfo && activeIndex === 0 ? "blur" : ""
        }`}
      >
        <img
          src={Project1Img}
          alt="Project 1"
          onDragStart={handleDragStart}
          className="carousel-image"
        />
        {showInfo && activeIndex === 0 && (
          <div className={`overlay-text ${showInfo ? "fade-in" : ""}`}>
            <p>{jsonData[0].description}</p>
            <button
              className={`close-button ${
                showInfo && activeIndex === 0 ? "show" : ""
              }`}
              onClick={() => setShowInfo(false)}
            >
              X
            </button>
          </div>
        )}
        <button
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className={`buttonPS ${hover ? "button-hoverPS" : ""} ${
            showInfo && activeIndex === 0 ? "close-button" : ""
          }`}
          onClick={() => {
            setActiveIndex(0);
            setShowInfo(!showInfo);
          }}
        >
          {showInfo && activeIndex === 0 ? "" : "Project 1 Info"}
        </button>
      </div>
    </div>,
    <div key="project2">
      <div
        className={`image-container ${
          showInfo && activeIndex === 1 ? "blur" : ""
        }`}
      >
        <img
          src={Project2Img}
          alt="Project 2"
          onDragStart={handleDragStart}
          className="carousel-image"
        />
        {showInfo && activeIndex === 1 && (
          <div className={`overlay-text ${showInfo ? "fade-in" : ""}`}>
            <p>{jsonData2[0].description}</p>
            <button
              className={`close-button ${
                showInfo && activeIndex === 1 ? "show" : ""
              }`}
              onClick={() => setShowInfo(false)}
            >
              X
            </button>
          </div>
        )}
        <button
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className={`buttonPS ${hover ? "button-hoverPS" : ""} ${
            showInfo && activeIndex === 1 ? "close-button" : ""
          }`}
          onClick={() => {
            setActiveIndex(1);
            setShowInfo(!showInfo);
          }}
        >
          {showInfo && activeIndex === 1 ? "" : "Project 2 Info"}
        </button>
      </div>
    </div>,
    <div key="project3">
      <div
        className={`image-container ${
          showInfo && activeIndex === 2 ? "blur" : ""
        }`}
      >
        <img
          src={Project3Img}
          alt="Project 3"
          onDragStart={handleDragStart}
          className="carousel-image"
        />
        {showInfo && activeIndex === 2 && (
          <div className={`overlay-text ${showInfo ? "fade-in" : ""}`}>
            <p>{jsonData3[0].description}</p>
            <button
              className={`close-button ${
                showInfo && activeIndex === 2 ? "show" : ""
              }`}
              onClick={() => setShowInfo(false)}
            >
              X
            </button>
          </div>
        )}
        <button
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className={`buttonPS ${hover ? "button-hoverPS" : ""} ${
            showInfo && activeIndex === 2 ? "close-button" : ""
          }`}
          onClick={() => {
            setActiveIndex(2);
            setShowInfo(!showInfo);
          }}
        >
          {showInfo && activeIndex === 2 ? "" : "Project 3 Info"}
        </button>
      </div>
    </div>,
  ];

  const handleSlideChanged = ({ item }) => {
    setActiveIndex(item);
    setShowInfo(false); // Hide info when sliding to a new project
  };

  const renderDotsItem = ({ isActive, itemIndex }) => (
    <div
      className={`dot ${isActive ? "active-dot" : "inactive-dot"}`}
      onClick={() => {
        setActiveIndex(itemIndex);
        setShowInfo(false); // Hide info when clicking on dots to change project
      }}
    ></div>
  );

  const renderPrevButton = ({ isDisabled }) => (
    <span
      className="carousel-arrow carousel-arrow-prev"
      style={{ opacity: isDisabled ? "0.5" : 1 }}
    >
      &lang;
    </span>
  );

  const renderNextButton = ({ isDisabled }) => (
    <span
      className="carousel-arrow carousel-arrow-next"
      style={{ opacity: isDisabled ? "0.5" : 1 }}
    >
      &rang;
    </span>
  );

  return (
    <div className="backgroundPS">
      <div className="layoutPS">
        <p className="titlePS">
          <b>{jsonData4[0].projects}</b>
        </p>
        <p className="subtitlePS">{jsonData4[0].projects_sub}</p>
        <div className="carousel-wrapper">
          <AliceCarousel
            renderPrevButton={renderPrevButton}
            items={items}
            renderNextButton={renderNextButton}
            activeIndex={activeIndex}
            onSlideChanged={handleSlideChanged}
            renderDotsItem={renderDotsItem}
            mouseTracking
            infinite
            animationType="fadeout"
            animationEasingFunction="ease-in-out"
            animationDuration={800}
          />
        </div>
      </div>
    </div>
  );
}

export default ProvenSuccess;
