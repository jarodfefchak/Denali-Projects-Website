import React, { useState, useEffect, useCallback, useMemo } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Project1Img from "../images/ProvenSuccess/Project1.png";
import Project2Img from "../images/ProvenSuccess/Project2.png";
import Project3Img from "../images/ProvenSuccess/Project3.png";
import axios from "axios";
import "./ProvenSuccess.css";

function ProvenSuccess() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showInfo, setShowInfo] = useState(false);
  const [data, setData] = useState({
    jsonData: null,
    jsonData2: null,
    jsonData3: null,
    jsonData4: null,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [response1, response2, response3, response4] = await Promise.all([
          axios.get("/data/Projects/Project1.json"),
          axios.get("/data/Projects/Project2.json"),
          axios.get("/data/Projects/Project3.json"),
          axios.get("/data/Headings.json"),
        ]);
        setData({
          jsonData: response1.data,
          jsonData2: response2.data,
          jsonData3: response3.data,
          jsonData4: response4.data,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleDragStart = (e) => e.preventDefault();

  const toggleShowInfo = useCallback((index) => {
    setActiveIndex(index);
    setShowInfo((prevShowInfo) => !prevShowInfo);
  }, []);

  const handleSlideChanged = ({ item }) => {
    if (!showInfo) {
      setActiveIndex(item);
    }
  };

  const renderDotsItem = ({ isActive, itemIndex }) => (
    <div
      className={`dot ${isActive ? "active-dot" : "inactive-dot"}`}
      onClick={() => {
        setActiveIndex(itemIndex);
        setShowInfo(false);
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

  const items = useMemo(
    () => [
      {
        key: "project1",
        img: Project1Img,
        description: data.jsonData && data.jsonData[0].description,
        title: data.jsonData && data.jsonData[0].title, // Use the title from JSON
      },
      {
        key: "project2",
        img: Project2Img,
        description: data.jsonData2 && data.jsonData2[0].description,
        title: data.jsonData2 && data.jsonData2[0].title, // Use the title from JSON
      },
      {
        key: "project3",
        img: Project3Img,
        description: data.jsonData3 && data.jsonData3[0].description,
        title: data.jsonData3 && data.jsonData3[0].title, // Use the title from JSON
      },
    ],
    [data.jsonData, data.jsonData2, data.jsonData3]
  );

  if (loading) {
    return null; // Render loading indicator or placeholder
  }

  return (
    <div className="backgroundPS">
      <div className="layoutPS">
        <h1 className="titlePS">
          <b>{data.jsonData4[0].projects}</b>
        </h1>
        <p className="subtitlePS">{data.jsonData4[0].projects_sub}</p>
        <div className="carousel-wrapper">
          <AliceCarousel
            items={items.map((item, index) => (
              <div key={item.key}>
                <div
                  className={`image-container ${
                    showInfo && activeIndex === index ? "blur" : ""
                  }`}
                >
                  <img
                    src={item.img}
                    alt={`Project ${index + 1}`}
                    onDragStart={handleDragStart}
                    className="carousel-image"
                    loading="lazy"
                  />
                  {showInfo && activeIndex === index && (
                    <>
                      <div
                        className={`overlay-text ${showInfo ? "fade-in" : ""}`}
                        style={{ whiteSpace: "pre-line" }}
                      >
                        {item.description.split("\n").map((line, i) => (
                          <p key={i}>{line}</p>
                        ))}
                      </div>
                      <button
                        className="close-button"
                        onClick={() => {
                          setShowInfo(false);
                          setTimeout(() => setActiveIndex(-1), 600); // Ensure fade-out before clearing the index
                        }}
                      >
                        X
                      </button>
                    </>
                  )}

                  <button
                    className={`buttonPS ${
                      showInfo && activeIndex === index ? "hide-button" : ""
                    }`}
                    onClick={() => toggleShowInfo(index)}
                    onMouseDown={(e) => {
                      if (showInfo) e.preventDefault();
                    }}
                  >
                    {showInfo && activeIndex === index ? "" : item.title}
                  </button>
                </div>
              </div>
            ))}
            renderPrevButton={renderPrevButton}
            renderNextButton={renderNextButton}
            activeIndex={activeIndex}
            onSlideChanged={handleSlideChanged}
            renderDotsItem={renderDotsItem}
            mouseTracking={!showInfo}
            touchTracking={!showInfo}
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
