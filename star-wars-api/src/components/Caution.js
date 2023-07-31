import React from "react";
import cautionIcon from "./assets/alert-circle.svg";
import "../Styles/Caution.css";

const Caution = ({show,onClose}) => {
    return (
        <>
        {show && (
            <div className="overlay">
              <div className="cautionwrapper" id="popup">
                <div className="upperpart">
                  <img src={cautionIcon} alt="Caution!" />
                  <p>Caution!</p>
                  <p>Are you sure you want to Delete?</p>
                </div>
                <div className="lowerpart">
                  <button onClick={onClose}>Cancel</button>
                  <button className="last" onClick={onClose}>
                    Yes
                  </button>
                </div>
              </div>
            </div>
        )}
        </>
    );
};

export default Caution;

