import React from "react";
import { useQuery } from "react-query";
import "./sidepanelvehicles.css";
import closeIcon from "../assets/ic_Close.svg";

const fetchFilmDetails = async (filmUrl) => {
    const res = await fetch(filmUrl);
    return res.json();
};

const Sidepanelvehicles = ({Vehicles, onClose}) => {

    const { data: films, status } = useQuery(
        ["films", Vehicles.films],
        () => Promise.all(Vehicles.films.map((filmUrl) => fetchFilmDetails(filmUrl))),
        {
          enabled: !!Vehicles.films, // Fetch data only when films URL is available
        }
    );

    return (
        <>
            <div className="panelwrapper">
                <div className="heading">
                    <p>Vehicles Details</p>
                    <img src={closeIcon} alt="Close" onClick={onClose} style={{cursor:"pointer"}}></img>
                </div>
                <div className="middle">
                    <div className="filmimage"></div>
                    <div className="title">
                        <p className="outertext">Vehicle Class</p>
                        <div className="box1">
                            <p className="innertext">{Vehicles.vehicle_class}</p>
                        </div>
                    </div>
                    <div className="opening">
                        <p className="outertext">Films</p>
                        <div className="box2">
                            {/* <p className="innertext">{Vehicles.films.join("\n")}</p> */}
                            {status === "loading" ? (
                                <p>Loading films...</p>
                            ) : status === "error" ? (
                                <p>Error fetching films</p>
                            ) : (
                                films.map((film) => <p key={film.title}>{film.title}</p>)
                            )}
                        </div>
                    </div>
                    <div className="genere">
                        <p className="outertext">Created</p> 
                        <div className="box3">
                            <p className="innertext">{Vehicles.created}</p>
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

export default Sidepanelvehicles;