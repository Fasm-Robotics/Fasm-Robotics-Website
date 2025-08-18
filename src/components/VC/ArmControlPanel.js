import { useState } from 'react';
import './ArmControlPanel.css';

export default function ArmControlPanel({ angles, setAngles }) {
    const handleChange = (joint, value) => {
      setAngles((prev) => ({ ...prev, [joint]: Number(value) }));
    };

    const handleMove = () => {
      console.log('Sending angles to backend:', angles);
      // fetch('/api/move-arm', { method: 'POST', body: JSON.stringify(angles) })
    };

    const handleReset = () => {
      setAngles({ SH1: 0, SH2: 0, SH3: 0, EL1: 0 });
    
      if (window.fasmRobot && window.fasmRobot.playResetAnimation) {
        window.fasmRobot.playResetAnimation();
      }
    };

  return (
    <div className="arm-panel">
      <h3>Arm Control Panel</h3>
      {Object.keys(angles).map((joint) => (
        <div className="slider-row" key={joint}>
          <label htmlFor={joint}>{joint}</label>
          <input
            type="range"
            id={joint}
            min="-180"
            max="180"
            value={angles[joint]}
            onChange={(e) => handleChange(joint, e.target.value)}
          />
          <span className="angle-value">{angles[joint]}°</span>
        </div>
      ))}
      <button className="reset-btn" onClick={handleReset}>Reset Angles</button>
    </div>
  );
}
