import React from "react";
import { useQuery } from "react-query";
import "./sidepanelspecies.css";
import closeIcon from "../assets/ic_Close.svg";

const fetchPeopleDetails = async (personUrl) => {
    const res = await fetch(personUrl);
    return res.json();
};

const Sidepanelspecies = ({Species, onClose}) => {

    const { data: people, status } = useQuery(
        ["people", Species.people],
        () => Promise.all(Species.people.map((personUrl) => fetchPeopleDetails(personUrl))),
        {
          enabled: !!Species.people, // Fetch data only when films URL is available
        }
    );

    return (
        <>
            <div className="panelwrapper">
                <div className="heading">
                    <p>Species Details</p>
                    <img src={closeIcon} alt="Close" onClick={onClose} style={{cursor:"pointer"}}></img>
                </div>
                <div className="middle">
                    <div className="filmimage"></div>
                    <div className="title">
                        <p className="outertext">Classification</p>
                        <div className="box1">
                            <p className="innertext">{Species.classification}</p>
                        </div>
                    </div>
                    <div className="opening">
                        <p className="outertext">People</p>
                        <div className="box2">
                            {/* <p className="innertext">{Species.people.join("\n")}</p> */}
                            {status === "loading" ? (
                                <p>Loading Species...</p>
                            ) : status === "error" ? (
                                <p>Error fetching Species</p>
                            ) : (
                                people.map((person) => <p key={person.name}>{person.name}</p>)
                            )}
                        </div>
                    </div>
                    <div className="genere">
                        <p className="outertext">Created</p> 
                        <div className="box3">
                            <p className="innertext">{Species.created}</p>
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

export default Sidepanelspecies;