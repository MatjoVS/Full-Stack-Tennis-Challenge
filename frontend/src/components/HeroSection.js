import React from "react";
import World from "../Assets/World.mp4";

const HeroSection = () => {
  return (
    <div>
      {/* <h2>HeroSection</h2> */}
      <video
        className="hero-container"
        autostart
        autoPlay
        loop
        muted
        // controls="false"
        src={World}
        type="video/mp4"
      />
    </div>
  );
};

export default HeroSection;
