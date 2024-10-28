import React from "react";
import RightArrow from '../../assets/rightArrow.png';
import { programsData } from '../../data/programsData';
import "./Program.css";
const Programs = () => {
  return (
    <div className="Programs" id="programs">
      {/* header */}

      <div className="programs-header">
        <span className="stroke">Explore our </span>
        <span>Programs </span>
        <span className="stroke">to shape you </span>
      </div>
      <div className="data">
      {programsData.map((program) => (
          <div className="category">
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="joinnow">
                <span>Join Now</span>
                <img src={RightArrow}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
