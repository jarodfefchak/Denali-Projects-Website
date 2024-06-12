import React, { useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Project1Img from "../images/ProvenSuccess/Project1.jpg";
import Project2Img from "../images/ProvenSuccess/Project2.jpg";
import Project3Img from "../images/ProvenSuccess/Project3.jpg";
import "./ProvenSuccess.css";

function ProvenSuccess() {
  useEffect(() => {
    window.$("#carouselExampleIndicators").carousel();
  }, []);
  
  const handleDragStart = (e) => e.preventDefault();
  
  const items = [
    <img
      src={Project1Img}
      alt="Project 1"
      onDragStart={handleDragStart}
      data-value="1"
      className="carousel-image"
    />,
    <img
      src={Project2Img}
      alt="Project 2"
      onDragStart={handleDragStart}
      data-value="2"
      className="carousel-image"
    />,
    <img
      src={Project3Img}
      alt="Project 3"
      onDragStart={handleDragStart}
      data-value="3"
      className="carousel-image"
    />,
  ];

  const renderDotsItem = ({ isActive }) => {
    return isActive ? "x" : "o";
  };

  const renderPrevButton = ({ isDisabled }) => {
    return (
      <span
        className="carousel-arrow carousel-arrow-prev"
        style={{ opacity: isDisabled ? "0.5" : 1 }}
      >
        &lang;
      </span>
    );
  };

  const renderNextButton = ({ isDisabled }) => {
    return (
      <span
        className="carousel-arrow carousel-arrow-next"
        style={{ opacity: isDisabled ? "0.5" : 1 }}
      >
        &rang;
      </span>
    );
  };

  const Carousel = () => (
    <AliceCarousel
      mouseTracking
      renderPrevButton={renderPrevButton}
      items={items}
      renderNextButton={renderNextButton}
      renderDotsItem={renderDotsItem}
      infinite
    />
  );

  return (
    <div className="backgroundPS">
      <div className="layoutPS">
        <p className="titlePS">
          <b>Proven Success</b>
        </p>
        <p className="subtitlePS">Engineering Energy, Empowering Progress</p>
        <Carousel />
      </div>
    </div>
  );
}

export default ProvenSuccess;


