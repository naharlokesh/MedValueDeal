import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import './Carousel.css';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "https://cms-contents.pharmeasy.in/carousel_item/1466c422fcd-Sugerfree.png?dim=1440x0",
    "https://cms-contents.pharmeasy.in/carousel_item/3eb4eb6bfbe-App_Himalaya.jpg?dim=1440x0",
    "https://cms-contents.pharmeasy.in/carousel_item/62668bab7a1-AccuChek-min.png?dim=1440x0",
    "https://cms-contents.pharmeasy.in/carousel_item/d0f595be419-Savlonv2.png?dim=1440x0",
    "https://cms-contents.pharmeasy.in/carousel_item/3c344faad99-App_Featured-J.jpg?dim=1440x0",
    "https://cms-contents.pharmeasy.in/carousel_item/d3481485e73-App_stayfree.jpg?dim=1440x0",
    "https://cms-contents.pharmeasy.in/carousel_item/f2d61678901-Ensure.png?dim=1440x0"
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel-container">
      <FontAwesomeIcon id="left" icon={faAngleLeft} onClick={prevSlide} />
      <div className="carousel-wrapper">
        <div
          className="carousel"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img key={index} src={image} alt={`slide ${index}`} draggable="false" />
          ))}
        </div>
      </div>
      <FontAwesomeIcon id="right" icon={faAngleRight} onClick={nextSlide} />
    </div>
  );
};

export default Carousel;
