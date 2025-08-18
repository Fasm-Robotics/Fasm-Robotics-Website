import { useState, useEffect } from 'react';
import VCIntro from './VCIntro';
import ThreePreview from "./ThreePreview";
import ArmControlPanel from "./ArmControlPanel";
import VCScrollIntro from './VCScrollIntro';

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
          background: radial-gradient(circle at center, #1e2a31, #0d1217);;
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
      <div style={{ backgroundColor: '#0a0a0a', padding: '4rem 0', marginTop: '-4rem'}}>
          <VCIntro />
          <VCScrollIntro />
          <ThreePreview angles={angles} />
          <ArmControlPanel angles={angles} setAngles={setAngles} />
      </div>
    </>
  );
}
