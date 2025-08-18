import React, { useEffect, useRef, useState } from "react";

const VCScrollIntro = () => {
  const sectionRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsActive(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`scroll-intro-section ${isActive ? "active" : ""}`}
    >
      <h1 className="scroll-intro-text">TRY OUR VIRTUAL CONTROLLER</h1>

      <style>{`
        .scroll-intro-section {
          background-color: white;
          color: black;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 2rem;
          transition: all 1s ease;
          transform: scale(0.9);
          opacity: 0.5;
        }

        .scroll-intro-section.active {
          transform: scale(1);
          opacity: 1;
        }

        .scroll-intro-text {
          font-size: 3rem;
          font-weight: bold;
          transition: transform 1s ease, opacity 1s ease;
        }
      `}</style>
    </section>
  );
};

export default VCScrollIntro;
