import React, { useEffect, useState, useContext } from 'react';

import { useSideBar } from '../../context/side-bar-context';

import './side-bar.css'

import fullLogo from '../../assets/full-logo.png'
import logo from '../../assets/logo.png'
import user from '../../assets/coordenador.jpg'

import SideBarItem from '../side-bar-item/side-bar-item';

const SideBar = ({data}) => {
    const { inactive, setInactive } = useSideBar();

    // useEffect(() => {
    //     props.onCollapse(inactive);
    // }, [inactive]);

    return <div className={`side-bar-container ${inactive? " inactive" : ""}`}> 
        <div className="top-section">
            <div className="logo">
                <img src={inactive? logo : fullLogo} alt="logo" />
            </div>
            <div 
                className="toggle-bar-btn"
                onClick={() => setInactive(!inactive)}
            >
                <i class={`bi bi-arrow-${!inactive? "left" : "right"}-square-fill`}></i>   
            </div>
        </div>

        <div className="divider" />

        <div className="main-menu">
            <ul>
                {
                    data.map((sideBarItem, index) => (
                        <SideBarItem 
                            key={index} 
                            name={sideBarItem.name}
                            to={sideBarItem.to}
                            exact={sideBarItem.exact}
                            iconClassName={sideBarItem.iconClassName}
                            subMenus={sideBarItem.subMenus || []}
                            sideBarActive={inactive}
                            
                        />                        
                    ))
                }
            </ul>
        </div>
        <div className="side-bar-footer">
            <div>
                <div className="avatar">
                    <img src={user} alt="user" />
                </div>
               <div className="user-info">
                    <h5>Paulo Perris</h5>
                    <p>Coordenador</p>
               </div>
            </div>
        </div>
    </div>
}

export default SideBar;