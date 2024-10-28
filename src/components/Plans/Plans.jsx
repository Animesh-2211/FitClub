import React from "react";
import whiteTick from "../../assets/whiteTick.png";
import { plansData } from "../../data/plansData";
import "./Plans.css";
const Plans = () => {
  return (
    <div className="plans-container">
      <div className="program-header" style={{ gap: "2rem" }}>
        <h1 className="stroke">READY TO START</h1>
        <h1>YOUR JOURNEY</h1>
        <h1 className="stroke">NOW WITH US</h1>
      </div>

      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>${plan.price}</span>

            <div className="features">
              {plan.features.map((feature, i) => (
                <div className="feature">
                  <img src={whiteTick} alt="" />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>
            <div>
              <span>See More Benefits</span>
            </div>
            <button className="btn">Join Now</button>
          </div>
        ))}
      </div>
    </div> 
  );
};

export default Plans;
