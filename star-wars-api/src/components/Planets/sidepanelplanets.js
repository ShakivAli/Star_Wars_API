import React from "react";
import { useQuery } from "react-query";
import "./sidepanelplanets.css";
import closeIcon from "../assets/ic_Close.svg";

const fetchResidentsDetails = async (residentUrl) => {
    const res = await fetch(residentUrl);
    return res.json();
};

const Sidepanelpeople = ({planets, onClose}) => {

    const { data: residents, status } = useQuery(
        ["residents", planets.residents],
        () => Promise.all(planets.residents.map((residentUrl) => fetchResidentsDetails(residentUrl))),
        {
          enabled: !!planets.residents, // Fetch data only when films URL is available
        }
    );

    return (
        <>
            <div className="panelwrapper">
                <div className="heading">
                    <p>Planet Details</p>
                    <img src={closeIcon} alt="Close" onClick={onClose} style={{cursor:"pointer"}}></img>
                </div>
                <div className="middle">
                    <div className="filmimage"></div>
                    <div className="title">
                        <p className="outertext">Name</p>
                        <div className="box1">
                            <p className="innertext">{planets.name}</p>
                        </div>
                    </div>
                    <div className="opening">
                        <p className="outertext">Residents</p>
                        <div className="box2">
                            {/* <p className="innertext">{planets.residents.join("\n")}</p> */}
                            {status === "loading" ? (
                                <p>Loading Residents...</p>
                            ) : status === "error" ? (
                                <p>Error fetching Residents</p>
                            ) : (
                                residents.map((resident) => <p key={resident.name}>{resident.name}</p>)
                            )}
                        </div>
                    </div>
                    <div className="genere">
                        <p className="outertext">Created</p>
                        <div className="box3">
                            <p className="innertext">{planets.created}</p>
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