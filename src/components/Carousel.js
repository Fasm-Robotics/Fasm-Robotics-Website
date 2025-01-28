import React, { useState, useEffect } from 'react';
import './Carousel.css'; // Assurez-vous que le fichier CSS lié est bien importé

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Défilement automatique toutes les 5 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    // Nettoie l'intervalle lors du démontage du composant
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-container">
      <div
        className="slider-container"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="slider">
            <div
              className="slider-content"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <h3 className="slider-title">{slide.title}</h3>
              <p className="slider-description">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button className="slider-nav-button prev" onClick={handlePrev}>
        ❮
      </button>
      <button className="slider-nav-button next" onClick={handleNext}>
        ❯
      </button>

      {/* Dots Navigation */}
      <div className="slider-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`slider-dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
