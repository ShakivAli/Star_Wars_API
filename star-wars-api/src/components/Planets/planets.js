import React,{useState} from 'react';
import {useQuery} from "react-query";
import Loader from "../Loader";
import gridIcon from "../assets/View grid.svg";
import listIcon from "../assets/View list.svg";
import planetIcon from "../assets/Planet.svg";
import moreIcon from "../assets/ic_More.svg";
import Popup from '../Popup';
import "./planets.css";

//fetching the data

const fetchpeople = async () => {
  const res = await fetch(`https://swapi.dev/api/planets/`);
  return res.json();
}

const People = () => {

  const [viewMode, setViewMode] = useState("grid");
  const [showPopup, setShowPopup] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });


  // fetched or not checking point 

  const {data, status} = useQuery("planets", fetchpeople, {
    onSuccess : () => console.log("Planets Data fetched successfully!"),
    onError : () => console.log("Error while fetching the data!!"),
  });

  const handleMoreClick = (event) => {
    // setShowPopup(!showPopup);
    const rect = event.currentTarget.getBoundingClientRect();
    const position = {
      x: rect.left + window.scrollX,
      y: rect.bottom + window.scrollY,
    };
    setPopupPosition(position);
    setShowPopup(true);
  }

  return (
    <>
      {status === "success" && ( // Display the heading only when the data is successfully loaded
        <div className='heading'>
          <h3 className='headingtext'>Planets</h3>
          <div className='options'>
            <div className='grid' onClick={() => setViewMode("grid")}>
              <img src={gridIcon} alt="grid view"></img>
              <p className='gridtext'>Grid</p>
            </div>
            <div className='list' onClick={() => setViewMode("list")}>
              <img src={listIcon} alt="list view"></img>
              <p className='listtext'>List</p>
            </div>
          </div>
        </div>
      )}
      <div className='contentplace'>
        {status === "loading" ? (
          <Loader/>
        ): status === "error" ? (
          <div>Error fetching data</div>
        ): status === "success" ? (
          viewMode === "grid" ? (
            data.results.map(planets => (
            <div className="card">
              <div className="image"></div>
                <div className='greypart'>
                    <div className="divsection">
                        <img src={planetIcon} alt="#" className='filmReel'></img>
                        <p className='text'>{planets.name}</p>
                        <img src={moreIcon} alt="more" className='moreIcon' onClick={handleMoreClick}></img>
                    </div>
              </div>
            </div>
            ))
          ) : (
            <div className="table-view">
              <table>
                <thead>
                  <tr>
                    <th className='movie'>Name</th>
                    <th>Climate</th>
                    <th>Gravity</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {/* Render the films in table format here */}
                  {data.results.map(planets => (
                    <tr key={planets.name}>
                      <td className='firstCol'><img src={planetIcon} alt={planets.name}></img>{planets.name}</td>
                      <td>{planets.climate}</td>
                      <td>{planets.gravity}</td>
                      <td><img src={moreIcon} alt="more" className='moretableIcon' onClick={handleMoreClick}></img></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )
        ): null}
      </div>
      {showPopup && <Popup position={popupPosition} onClose={() => setShowPopup(false)}/>}
    </>
  )
}

export default People;