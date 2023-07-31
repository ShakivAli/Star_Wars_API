import React,{useState} from "react";
import { useQuery } from "react-query";
import "./specieslist.css";
import "./overlay.css";
import specieIcon from "../assets/Alien.svg";
import arrowIcon from "../assets/CaretRight.svg";
import Sidepanelspecies from "./sidepanelspecies";

const fetchSpecies = async () => {
    const res = await fetch(`https://swapi.dev/api/species/`);
    return res.json();
};

const SpeciesList = () => {
    const {data,status} = useQuery("Species", fetchSpecies);
    const [selectedSpecie, setSelectedSpecie] = useState(null);

    const handlePeopleclick = (Species) => {
        setSelectedSpecie(Species);
    }

    const handleCloseSidePanel = () => {
        setSelectedSpecie(null);
    }

    return (
        <div className="filmlistwrapper">
            {selectedSpecie && <div className="overlay" onClick={handleCloseSidePanel}></div>}
            {status === "success" ? (
                <ul>
                    {data.results.map((Species) => (
                        <li key={Species.name} onClick={() => handlePeopleclick(Species)}><img src={specieIcon} alt={Species.name}></img>{Species.name}<img className="arrowicon" src={arrowIcon} alt={Species.name}></img></li>
                    ))}
                </ul>
            ) : null}
            {selectedSpecie && <Sidepanelspecies Species={selectedSpecie} onClose={handleCloseSidePanel}/>}
        </div>
    );
};

export default SpeciesList;