import React,{useState} from "react";
import { useQuery } from "react-query";
import "./filmlist.css";
import "./overlay.css";
import reelIcon from "../assets/FilmReel.svg";
import arrowIcon from "../assets/CaretRight.svg";
import Sidepanel from "./sidepanel";

const fetchFilms = async () => {
    const res = await fetch(`https://swapi.dev/api/films/`);
    return res.json();
};

const FilmList = () => {
    const {data,status} = useQuery("films", fetchFilms);
    const [selectedFilm, setSelectedFilm] = useState(null);

    const handleFilmclick = (film) => {
        setSelectedFilm(film);
    }

    const handleCloseSidePanel = () => {
        setSelectedFilm(null);
    }

    return (
        <div className="filmlistwrapper">
            {selectedFilm && <div className="overlay" onClick={handleCloseSidePanel}></div>}
            {status === "success" ? (
                <ul>
                    {data.results.map((film) => (
                        <li key={film.title} onClick={() => handleFilmclick(film)}><img src={reelIcon} alt={film.title}></img>{film.title}<img className="arrowicon" src={arrowIcon} alt={film.title}></img></li>
                    ))}
                </ul>
            ) : null}
            {selectedFilm && <Sidepanel film={selectedFilm} onClose={handleCloseSidePanel}/>}
        </div>
    );
};

export default FilmList;