import React,{useState} from "react";
import "../Styles/Navbar.css";
import ArrowIcon from "../components/assets/CaretRight.svg";
import folderIcon from "../components/assets/FolderSimple.svg";
import FilmList from "./Films/filmlist";
import PeopleList from "./People/peoplelist";
import PlanetsList from "./Planets/planetslist";
import SpeciesList from "./Species/specieslist";
import StarshipsList from "./Starships/starshipslist";
import VehiclesList from "./Vehicles/vehicleslist";

const Navbar = ({setPage}) => {

    const [showFilmList, setShowFilmList] = useState(false);
    const [showPeopleList, setShowPeopleList] = useState(false);
    const [showPlanetsList, setShowPlanetsList] = useState(false);
    const [showSpeciesList, setShowSpeciesList] = useState(false);
    const [showStarshipsList, setShowStarshipsList] = useState(false);
    const [showVehiclesList, setShowVehiclesList] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null);

    const handleMenuClick = (menu) => {
        setActiveMenu((prevMenu) => (prevMenu === menu ? null : menu));
        setPage(menu);
    }

    return (
        <>
            <nav>
                <div className={`navi ${activeMenu === "Films" ? "active" : ""}`} onClick={() => {
                    // handleMenuClick("Films");
                    setPage("Films");
                    setShowFilmList(true);
                    handleMenuClick("Films"); 
                    }}>
                    <img src={folderIcon} alt="films"></img>
                    <p className="text">Films</p>
                    <img src={ArrowIcon} alt="films"></img>
                </div>
                {showFilmList && activeMenu === "Films" && <FilmList/>}
                <div className={`navi ${activeMenu === "People" ? "active" : ""}`} onClick={() => {
                        setPage("People");
                        setShowPeopleList(true);
                        handleMenuClick("People");
                    }}>
                    <img src={folderIcon} alt="films"></img>
                    <p className="text">People</p>
                    <img src={ArrowIcon} alt="films"></img>
                </div>
                {showPeopleList && activeMenu === "People" && <PeopleList/>}
                <div className={`navi ${activeMenu === "Planets" ? "active" : ""}`} onClick={() => 
                    {
                        setPage("Planets");
                        setShowPlanetsList(true);
                        handleMenuClick("Planets")
                    }}>
                    <img src={folderIcon} alt="films"></img>
                    <p className="text">Planets</p>
                    <img src={ArrowIcon} alt="films"></img>
                </div>
                {showPlanetsList && activeMenu === "Planets" && <PlanetsList/>}
                <div className={`navi ${activeMenu === "Species" ? "active" : ""}`} onClick={() => 
                    {
                        setPage("Species");
                        setShowSpeciesList(true);  
                        handleMenuClick("Species")                      
                    }}>
                    <img src={folderIcon} alt="films"></img>
                    <p className="text">Species</p>
                    <img src={ArrowIcon} alt="films"></img>
                </div>
                {showSpeciesList && activeMenu === "Species" && <SpeciesList/>}
                <div className={`navi ${activeMenu === "Starships" ? "active" : ""}`} onClick={() => 
                    {
                        setPage("Starships");
                        setShowStarshipsList(true);
                        handleMenuClick("Starships")
                    }}>
                    <img src={folderIcon} alt="films"></img>
                    <p className="text">Starships</p>
                    <img src={ArrowIcon} alt="films"></img>
                </div>
                {showStarshipsList && activeMenu === "Starships" && <StarshipsList/>}
                <div className={`navi ${activeMenu === "Vehicles" ? "active" : ""}`} onClick={() => 
                    {
                        setPage("Vehicles");
                        setShowVehiclesList(true);
                        handleMenuClick("Vehicles")
                    }}>
                    <img src={folderIcon} alt="films"></img>
                    <p className="text">Vehicles</p>
                    <img src={ArrowIcon} alt="films"></img>
                </div>
                {showVehiclesList && activeMenu === "Vehicles" && <VehiclesList/>}
            </nav>
        </>
    );
}

export default Navbar;