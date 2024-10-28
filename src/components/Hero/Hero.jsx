import React from "react";
import Heart from "../../assets/heart.png";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Header from "../Header/Header";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      {/* //dividing in two parts */}
      <div className="left-h">
        <Header />

        <div className="best">
          <div></div>
            <span>The Best Fitness Club in the Town</span>
          
        </div>
        {/* Hero Heading */}
        <div className="herotext">
          <div>
            <span className="stroke">Shape </span>
            <span>Your</span>           
          </div>
          <div>
            <span>Ideal </span>
            <span>Body</span>
            </div>
            </div>
            <div className="span-text">
              <span>In Here We Will Help You to Shape and Build Your Ideal Body And Live Up Your Life To Fullest</span>
            </div>
          {/* Figured */}
          <div className="figures">
            <div>
              <span>+140</span>
              <span>Expert Coaches</span>
            </div>
            <div>
              <span>+200</span>
              <span>Members Joined</span>
            </div>
            <div>
              <span>+50</span>
              <span>Fitness Program</span>
            </div>
          </div>

          {/* Button */}
          <div className="add-btn">
            <button className="btn">Get Started</button>
            <button className="btn">Learn More</button>
          </div>
        
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>

        <div className="heart">
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </div>
        {/* Hero Images */}
        <img src={hero_image} alt="" className="hero-image" />
        <img src={hero_image_back} alt="" className="hero-image-back" />
      </div>
    </div>
  );
};
export default Hero;
