import React from "react";
import { useQuery } from "react-query";
import "./sidepanelpeople.css";
import closeIcon from "../assets/ic_Close.svg";

const fetchFilmDetails = async (filmUrl) => {
    const res = await fetch(filmUrl);
    return res.json();
};

const Sidepanelpeople = ({people, onClose}) => {

    const { data: films, status } = useQuery(
        ["films", people.films],
        () => Promise.all(people.films.map((filmUrl) => fetchFilmDetails(filmUrl))),
        {
          enabled: !!people.films, // Fetch data only when films URL is available
        }
    );

    return (
        <>
            <div className="panelwrapper">
                <div className="heading">
                    <p>Person Details</p>
                    <img src={closeIcon} alt="Close" onClick={onClose} style={{cursor:"pointer"}}></img>
                </div>
                <div className="middle">
                    <div className="filmimage"></div>
                    <div className="title">
                        <p className="outertext">Name</p>
                        <div className="box1">
                            <p className="innertext">{people.name}</p>
                        </div>
                    </div>
                    <div className="opening">
                        <p className="outertext">Films</p>
                        <div className="box2">
                            {/* <p className="innertext">{people.films.join("\n")}</p> */}
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
                        <p className="outertext">height</p>
                        <div className="box3">
                            <p className="innertext">{people.height}</p>
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

export default Sidepanelpeople;