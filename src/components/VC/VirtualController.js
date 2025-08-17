import { useState, useEffect } from 'react';
import ThreePreview from "./ThreePreview";
import ArmControlPanel from "./ArmControlPanel";

export default function VirtualController() {
  const [angles, setAngles] = useState({
    SH1: 0,
    SH2: 0,
    SH3: 0,
    EL1: 0,
  });
  return (
    <>
      <style>{`
        .vc-container {
          background-image: url('/images/robotic-bg.jpg');
          background-size: cover;
          background-position: center;
          padding: 6rem 2rem;
          text-align: center;
          color: #fff;
          position: relative;
          min-height: 100vh;
        }

        .vc-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          z-index: 1;
        }

        .vc-content {
          position: relative;
          z-index: 2;
          max-width: 900px;
          margin: 0 auto;
        }

        .vc-title {
          font-size: 2.2rem;
          font-weight: bold;
          margin-bottom: 1.5rem;
        }

        .vc-description {
          font-size: 1.1rem;
          line-height: 1.7;
          margin-bottom: 2rem;
        }

        .vc-button {
          display: inline-block;
          background-color: #4a90e2;
          color: white;
          padding: 0.9rem 1.8rem;
          border-radius: 8px;
          font-weight: 600;
          text-decoration: none;
          transition: background 0.3s ease;
          margin-bottom: 2rem;
        }

        .vc-button:hover {
          background-color: #357ABD;
        }

        .vc-video-placeholder {
          width: 100%;
          max-width: 720px;
          height: 400px;
          background-color: black;
          border-radius: 12px;
          margin: 2rem auto 0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #aaa;
          font-size: 1.2rem;
          border: 2px dashed #555;
        }
      `}</style>

      <section className="vc-container">
        <div className="vc-overlay"></div>
        <div className="vc-content">
          <h2 className="vc-title">Virtual Controller Simulator</h2>
          <p className="vc-description">
            The Virtual Controller is a real-time simulation tool designed to control the FASM robotic arm in a 3D environment.
            It allows precise manipulation through XYZ coordinates and joint-specific commands.
            This interface bridges the gap between the physical arm and digital control, enabling testing, prototyping, and debugging before real-world deployment.
          </p>
          <ThreePreview angles={angles} />
          <ArmControlPanel angles={angles} setAngles={setAngles} />
        </div>
      </section>
    </>
  );
}
