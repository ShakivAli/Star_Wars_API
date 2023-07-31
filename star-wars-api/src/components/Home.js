import React, { useState } from "react";
import Navbar from "./Navbar";
import StarWarsLogo from "../components/assets/image 6.jpg";
import Welcome from "./Welcome";
import Films from "./Films/films";
import People from "./People/people";
import Planets from "./Planets/planets";
import Species from "./Species/species";
import Starships from "./Starships/starships";
import Vehicles from "./Vehicles/vehicles";
import SearchIcon from "./assets/Frame.svg";
import "../Styles/Home.css";

const Home = () => {

    const [page, setPage] = useState("home");
    
    return (
        <div className="main">
            <div className="header">
                <img src={StarWarsLogo} alt="Star Wars" className="logo" style={{cursor:"pointer"}}></img>
                {page !== "home" ? (
                    <div className="searchBox">
                    <img src={SearchIcon} alt="search"></img>
                    <input placeholder="Search"></input>
                </div>
                ):null}
            </div>
            <div className="mainbody">
                <div className="navbar">
                    <Navbar setPage={setPage}/>
                </div>
                <div className="content">
                    { page === "Films" ? (
                        <Films/>
                    ): page === "People" ? (
                        <People/>
                    ): page === "Planets" ? (
                        <Planets/>
                    ): page === "Species" ? (
                        <Species/>
                    ): page === "Starships" ? (
                        <Starships/>
                    ): page === "Vehicles" ? (
                        <Vehicles/>
                    ): (
                        <Welcome/>   //default
                    )}
                </div>
            </div>
        </div>
    );
}

export default Home;