import React from "react";
import './card-item.css';



const CardItem = (props) =>{
    const {subject, classYear, status, quarter} = props;
    return(
        <div className="body">
            <div className="top">
                <div className="icon">
                    <i class="bi bi-three-dots-vertical"></i>
                </div>
                <h2>{subject}</h2>
                <h3>{classYear}</h3>
            </div>
            <div className="footer">
                <hr className="line"/>
                <div className="fechado">
                    <h2 className="fechado">{status}</h2>
                </div>
                <div className="fechado">
                    <div className="circle"></div>
                    <div className="background_ano"></div>
                    <h2 className="ano">{quarter}</h2>
                </div>  
            </div>
        </div>    
    );
}

export default CardItem;