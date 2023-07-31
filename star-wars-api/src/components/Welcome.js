import React from 'react'
import "../Styles/Welcome.css";
import HomeImage from "../components/assets/Rectangle 6.png";

const Welcome = () => {
  return (
    <>
        <div className="homebox">
            <div className="inner">
                <img className="Image" src={HomeImage} alt="star Wars"></img>
                <p className="heading-text">Welcome to Star Wars Dashboard</p>
            </div>
            <p className="description">Star Wars is an American epic space opera multimedia franchise created by George Lucas, which began with the eponymous 1977 film and quickly became a worldwide pop culture phenomenon.</p>
        </div> 
    </>
  );
};

export default Welcome;