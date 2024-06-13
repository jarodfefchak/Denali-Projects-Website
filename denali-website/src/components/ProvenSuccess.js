import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Project1Img from "../images/ProvenSuccess/Project1.jpg";
import Project2Img from "../images/ProvenSuccess/Project2.jpg";
import Project3Img from "../images/ProvenSuccess/Project3.jpg";
import "./ProvenSuccess.css";

function ProvenSuccess() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDragStart = (e) => e.preventDefault();

  const items = [
    <img
      src={Project1Img}
      alt="Project 1"
      onDragStart={handleDragStart}
      className="carousel-image"
      key="Pimg1"
    />,
    <img
      src={Project2Img}
      alt="Project 2"
      onDragStart={handleDragStart}
      className="carousel-image"
      key="Pimg2"
    />,
    <img
      src={Project3Img}
      alt="Project 3"
      onDragStart={handleDragStart}
      className="carousel-image"
      key="Pimg3"
    />,
  ];

  const handleSlideChanged = ({ item }) => setActiveIndex(item);

  const renderDotsItem = ({ isActive, itemIndex }) => (
    <div
      className={`dot ${isActive ? "active-dot" : "inactive-dot"}`}
      onClick={() => setActiveIndex(itemIndex)}
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
          <b>Proven Success</b>
        </p>
        <p className="subtitlePS">Engineering Energy, Empowering Progress</p>
        <div className="carousel-container">
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
            // disableButtonsControls // Disable default controls to apply custom styles
          />
        </div>
      </div>
    </div>
  );
}

export default ProvenSuccess;
