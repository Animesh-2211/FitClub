import tick from "../../assets/tick.png";
import "./Reasons.css";

import adidas from "../../assets/adidas.png";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import nb from "../../assets/nb.png";
import nike from "../../assets/nike.png";


const Reasons = () => {
  return (
    <div className="reasons">
      <div className="left">
    

    <img src={image1} alt="" />
    <img src={image2} alt="" />
    <img src={image3} alt="" />
    <img src={image4} alt="" />





      </div>

      <div className="right">
        <div className="head">
          <h3 className="heading1">SOME REASONS</h3>
          <div className="why">
            <span className="stroke">WHY </span>
            <span className="part"> CHOOSE US</span>
          </div>
        </div>
        <div className="points">
          <div className="first">
            <img src={tick} alt="" />
            <span>Over 140+ EXPERTS COACHES</span>
          </div>
          <div className="first">
            <img src={tick} alt="" />
            <span>Over 140+ EXPERTS COACHES</span>
          </div>
          <div className="second">
            <img src={tick} alt="" />
            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </div>
          <div className="third">
            <img src={tick} alt="" />
            <span>1 FREE PROGRAM FOR NEW MEMBER</span>
          </div>

          <div className="fourth">
            <img src={tick} alt="" />
            <span>RELIABLE PARTNERS</span>
          </div>
        </div>

        <span  className="partner" style={{
            color: "var(--gray)",
            fontWeight:"normal",
        }}>OUR PARTNERS</span>

        <div className="partners">
            <img src={nb} alt="" />
            <img src={adidas} alt="" />
            <img src={nike} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Reasons;
