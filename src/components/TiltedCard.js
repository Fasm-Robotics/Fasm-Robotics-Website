import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import "./TiltedCards.css";

const springValues = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

export default function TiltedCard({
  imageSrc,
  altText = "Tilted card image",
  title = "",
  description = "",
  containerHeight = "300px",
  containerWidth = "100%",
  imageHeight = "300px",
  imageWidth = "300px",
  scaleOnHover = 1.1,
  rotateAmplitude = 14,
}) {
  const ref = useRef(null);

  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);

  function handleMouse(e) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);
  }

  function handleMouseEnter() {
    scale.set(scaleOnHover);
  }

  function handleMouseLeave() {
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <figure
      ref={ref}
      className="tilted-card-figure"
      style={{
        height: containerHeight,
        width: containerWidth,
        position: "relative",
        overflow: "hidden",
        borderRadius: "15px",
      }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="tilted-card-inner"
        style={{
          width: imageWidth,
          height: imageHeight,
          rotateX,
          rotateY,
          scale,
        }}
      >
        <img
          src={imageSrc}
          alt={altText}
          className="tilted-card-img"
          style={{
            width: imageWidth,
            height: imageHeight,
            objectFit: "cover",
          }}
        />
      </motion.div>

      <div
        style={{
          position: "absolute",
          top: "15px",
          left: "15px",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          color: "white",
          padding: "5px 10px",
          borderRadius: "5px",
          fontWeight: "bold",
        }}
      >
        {title}
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "15px",
          left: "15px",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          color: "white",
          padding: "5px 10px",
          borderRadius: "5px",
          fontSize: "0.9rem",
        }}
      >
        {description}
      </div>
    </figure>
  );
}
