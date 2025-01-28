import React, { useState } from 'react';
import styled from 'styled-components';
import { useEffect } from 'react';

const images = [
  'https://via.placeholder.com/800x400?text=Slide+1',
  'https://via.placeholder.com/800x400?text=Slide+2',
  'https://via.placeholder.com/800x400?text=Slide+3',
];


export const useDotButton = (emblaApi) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    onSelect();
  }, [emblaApi]);

  const onDotButtonClick = (index) => {
    if (!emblaApi) return;
    emblaApi.scrollTo(index);
  };

  return { selectedIndex, scrollSnaps, onDotButtonClick };
};

export const usePrevNextButtons = (emblaApi) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setPrevBtnDisabled(!emblaApi.canScrollPrev());
      setNextBtnDisabled(!emblaApi.canScrollNext());
    };
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    onSelect();
  }, [emblaApi]);

  const onPrevButtonClick = () => {
    if (emblaApi) emblaApi.scrollPrev();
  };

  const onNextButtonClick = () => {
    if (emblaApi) emblaApi.scrollNext();
  };

  return { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick };
};


function SimpleCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container" style={styles.container}>
      <button onClick={handlePrev} style={styles.button}>
        ❮
      </button>
      <div className="carousel-slide" style={styles.slide}>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          style={styles.image}
        />
      </div>
      <button onClick={handleNext} style={styles.button}>
        ❯
      </button>
      <div style={styles.dotsContainer}>
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            style={{
              ...styles.dot,
              backgroundColor: currentIndex === index ? '#333' : '#ccc',
            }}
          />
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    width: '800px',
    margin: 'auto',
  },
  slide: {
    overflow: 'hidden',
    width: '100%',
    borderRadius: '8px',
  },
  image: {
    width: '100%',
    height: 'auto',
  },
  button: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    background: '#fff',
    border: 'none',
    borderRadius: '50%',
    padding: '10px',
    cursor: 'pointer',
    zIndex: 1,
  },
  dotsContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '10px',
  },
  dot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    margin: '0 5px',
    border: 'none',
    cursor: 'pointer',
  },
};

export default SimpleCarousel;
