import React from "react";
import './card-item.css';



const CardItem = (props) =>{
    const {subject, classYear, isOpened, quarter} = props;
    return(
        <div className="card-item-container">
            <div className="card-body ">
                <div className={`top ${isOpened ? "open" : "close"}`}>
                    <div className="icon">
                        <i class="bi bi-three-dots-vertical"></i>
                    </div>
                    <h2>{subject}</h2>
                    <h3>{classYear}</h3>
                </div>
                <div className="footer">
                    <hr className="line"/>
                    <div className="status">
                        <h3 className="status">{`${isOpened ? "Aberto" : "Fechado"}`}</h3>
                    </div>
                    <div className="isOpened">
                        <div className={`circle circle${isOpened ? "Open" : "Close"}`}></div>
                        <div className="background_ano"></div>
                        <h3 className="ano">{quarter}</h3>
                    </div>  
                </div>
            </div>    
        </div>
        
    );
}

export default CardItem;