import React,{useState} from "react";
import { useQuery } from "react-query";
import "./planetslist.css";
import "./overlay.css";
import planetIcon from "../assets/Planet.svg";
import arrowIcon from "../assets/CaretRight.svg";
import Sidepanelplanets from "./sidepanelplanets";

const fetchplanets = async () => {
    const res = await fetch(`https://swapi.dev/api/planets/`);
    return res.json();
};

const PlanetsList = () => {
    const {data,status} = useQuery("planets", fetchplanets);
    const [selectedPlanet, setSelectedPlanet] = useState(null);

    const handlePeopleclick = (people) => {
        setSelectedPlanet(people);
    }

    const handleCloseSidePanel = () => {
        setSelectedPlanet(null);
    }

    return (
        <div className="filmlistwrapper">
            {selectedPlanet && <div className="overlay" onClick={handleCloseSidePanel}></div>}
            {status === "success" ? (
                <ul>
                    {data.results.map((planets) => (
                        <li key={planets.name} onClick={() => handlePeopleclick(planets)}><img src={planetIcon} alt={planets.name}></img>{planets.name}<img className="arrowicon" src={arrowIcon} alt={planets.name}></img></li>
                    ))}
                </ul>
            ) : null}
            {selectedPlanet && <Sidepanelplanets planets={selectedPlanet} onClose={handleCloseSidePanel}/>}
        </div>
    );
};

export default PlanetsList;