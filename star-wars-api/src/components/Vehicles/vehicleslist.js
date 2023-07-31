import React,{useState} from "react";
import { useQuery } from "react-query";
import "./vehicleslist.css";
import "./overlay.css";
import vehicleIcon from "../assets/CarProfile.svg";
import arrowIcon from "../assets/CaretRight.svg";
import Sidepanelvehicles from "./sidepanelvehicles";

const fetchvehicles = async () => {
    const res = await fetch(`https://swapi.dev/api/vehicles/`);
    return res.json();
};

const VehiclesList = () => {
    const {data,status} = useQuery("Vehicles", fetchvehicles);
    const [selectedVehicle, setSelectedVehicle] = useState(null);

    const handlePeopleclick = (Vehicles) => {
        setSelectedVehicle(Vehicles);
    }

    const handleCloseSidePanel = () => {
        setSelectedVehicle(null);
    }

    return (
        <div className="filmlistwrapper">
            {selectedVehicle && <div className="overlay" onClick={handleCloseSidePanel}></div>}
            {status === "success" ? (
                <ul>
                    {data.results.map((Vehicles) => (
                        <li key={Vehicles.name} onClick={() => handlePeopleclick(Vehicles)}><img src={vehicleIcon} alt={Vehicles.name}></img>{Vehicles.name}<img className="arrowicon" src={arrowIcon} alt={Vehicles.name}></img></li>
                    ))}
                </ul>
            ) : null}
            {selectedVehicle && <Sidepanelvehicles Vehicles={selectedVehicle} onClose={handleCloseSidePanel}/>}
        </div>
    );
};

export default VehiclesList;