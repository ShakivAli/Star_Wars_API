import React from "react";
import "./sidepanel.css";
import closeIcon from "../assets/ic_Close.svg";

const Sidepanel = ({film, onClose}) => {

    return (
        <>
            <div className="panelwrapper">
                <div className="heading">
                    <p>Movie Details</p>
                    <img src={closeIcon} alt="Close" onClick={onClose} style={{cursor:"pointer"}}></img>
                </div>
                <div className="middle">
                    <div className="filmimage"></div>
                    <div className="title">
                        <p className="outertext">Title</p>
                        <div className="box1">
                            <p className="innertext">{film.title}</p>
                        </div>
                    </div>
                    <div className="opening">
                        <p className="outertext">Opening Crawl</p>
                        <div className="box2">
                            <p className="innertext">{film.opening_crawl}</p>
                        </div>
                    </div>
                    <div className="genere">
                        <p className="outertext">Genere</p>
                        <div className="box3">
                            <p className="innertext">Super Hero</p>
                        </div>
                    </div>
                </div>

                <div className="footer">
                    <button onClick={onClose}>Close</button>
                </div>
            </div>
        </>
    );
};

export default Sidepanel;