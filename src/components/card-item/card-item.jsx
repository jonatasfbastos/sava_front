import React from "react";
import './card-item.css';

const CardItem = () =>{
    return(
        <div className="body">
            <div className="top">
        
                <div className="menu1"></div>
                <div className="menu2"></div>
                <div className="menu3"></div>
                <h2>Informática</h2>
                <h3>3º Info A</h3>
            </div>
            <div className="footer">
                <hr className="line"/>
                <div className="fechado">
                    <h2 className="fechado">Fechado</h2>
                </div>
                <div className="fechado">
                    <div className="circle"></div>
                    <div className="background_ano"></div>
                    <h2 className="ano">2020.3</h2>
                </div>  
            </div>
        </div>    
    );
}

export default CardItem;