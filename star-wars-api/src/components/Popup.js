import React,{useState} from "react";
import viewIcon from "./assets/Frame (1).svg";
import downloadIcon from "./assets/Frame (2).svg";
import renameIcon from "./assets/Frame (3).svg";
import shareIcon from "./assets/Frame (4).svg";
import moveIcon from "./assets/Frame (5).svg";
import lockIcon from "./assets/LockSimple.svg";
import deleteIcon from "./assets/Frame (6).svg";
import Caution from "./Caution";
import "../Styles/Popup.css";

const Popup = ({onClose}) => {
    
    const [showCaution, setShowCaution] = useState(false);

    const handleDeleteClick = () => {
        setShowCaution(true);
    };

    const handleCloseCaution = () => {
        setShowCaution(false);
    };

    return (
        <>
            {showCaution && <Caution show={showCaution} onClose={handleCloseCaution} />}
            {showCaution && <div className="tint" onClick={handleCloseCaution}></div>}
            <div className="popup">
                <ul>
                    <li><img src={viewIcon} alt="View"></img>View</li>
                    <li><img src={downloadIcon} alt="Download"></img>Download</li>
                    <li><img src={renameIcon} alt="Rename"></img>Rename</li>
                    <li><img src={shareIcon} alt="Share"></img>Share Link</li>
                    <li><img src={moveIcon} alt="Move"></img>Move</li>
                    <li><img src={lockIcon} alt="Private"></img>Mark Private</li>
                    <li style={{color:"red", cursor:"pointer"}} onClick={handleDeleteClick}><img src={deleteIcon} alt="Delete"></img>Delete</li>
                    <li onClick={onClose} style={{cursor:"pointer"}}>Close</li>
                </ul>
            </div>
        </>
    );
};

export default Popup;