import React,{useState} from "react";
import { useQuery } from "react-query";
import "./peoplelist.css";
import "./overlay.css";
import userIcon from "../assets/Users.svg";
import arrowIcon from "../assets/CaretRight.svg";
import Sidepanelpeople from "./sidepanelpeople";

const fetchpeople = async () => {
    const res = await fetch(`https://swapi.dev/api/people/`);
    return res.json();
};

const PeopleList = () => {
    const {data,status} = useQuery("people", fetchpeople);
    const [selectedPerson, setSelectedPerson] = useState(null);

    const handlePeopleclick = (people) => {
        setSelectedPerson(people);
    }

    const handleCloseSidePanel = () => {
        setSelectedPerson(null);
    }

    return (
        <div className="filmlistwrapper">
            {selectedPerson && <div className="overlay" onClick={handleCloseSidePanel}></div>}
            {status === "success" ? (
                <ul>
                    {data.results.map((people) => (
                        <li key={people.name} onClick={() => handlePeopleclick(people)}><img src={userIcon} alt={people.name}></img>{people.name}<img className="arrowicon" src={arrowIcon} alt={people.name}></img></li>
                    ))}
                </ul>
            ) : null}
            {selectedPerson && <Sidepanelpeople people={selectedPerson} onClose={handleCloseSidePanel}/>}
        </div>
    );
};

export default PeopleList;