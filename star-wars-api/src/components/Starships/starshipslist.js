import React,{useState} from "react";
import { useQuery } from "react-query";
import "./starshipslist.css";
import "./overlay.css";
import spaceshipIcon from "../assets/RocketLaunch.svg";
import arrowIcon from "../assets/CaretRight.svg";
import Sidepanelstarships from "./sidepanelstarships";

const fetchstarships = async () => {
    const res = await fetch(`https://swapi.dev/api/starships/`);
    return res.json();
};

const StarshipsList = () => {
    const {data,status} = useQuery("Starships", fetchstarships);
    const [selectedStarsip, setSelectedStarship] = useState(null);

    const handlePeopleclick = (Starships) => {
        setSelectedStarship(Starships);
    }

    const handleCloseSidePanel = () => {
        setSelectedStarship(null);
    }

    return (
        <div className="filmlistwrapper">
            {selectedStarsip && <div className="overlay" onClick={handleCloseSidePanel}></div>}
            {status === "success" ? (
                <ul>
                    {data.results.map((Starships) => (
                        <li key={Starships.name} onClick={() => handlePeopleclick(Starships)}><img src={spaceshipIcon} alt={Starships.name}></img>{Starships.name}<img className="arrowicon" src={arrowIcon} alt={Starships.name}></img></li>
                    ))}
                </ul>
            ) : null}
            {selectedStarsip && <Sidepanelstarships Starships={selectedStarsip} onClose={handleCloseSidePanel}/>}
        </div>
    );
};

export default StarshipsList;