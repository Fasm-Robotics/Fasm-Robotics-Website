import { useEffect, useState } from "react";
import LightRays from "./LightRays";
import "./VCIntro.css";

export default function VCIntro() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="vc-intro-wrapper">
      <LightRays
        raysOrigin="top-center"
        raysColor="#00ffff"
        raysSpeed={1.5}
        lightSpread={0.8}
        rayLength={1.2}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0.1}
        distortion={0.05}
        className="custom-rays"
      />

      <div className={`vc-intro-content ${visible ? "visible" : ""}`}>
      <h1 className="vc-intro-text">Ever wondered how to control a robotic arm in 3D?</h1>
      <p className="vc-description">
        The Virtual Controller is an interactive tool designed to let you control the FASM robotic arm directly in your browser.  
        It allows you to test joint movements, adjust positions, and run inverse kinematics in real-time.  
        Use it to prototype, experiment, and safely simulate the arm’s behavior.
      </p>
      </div>
    </section>
  );
}
