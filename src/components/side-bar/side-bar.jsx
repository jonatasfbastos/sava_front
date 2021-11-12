import React, { useEffect, useState } from 'react';

import './side-bar.css'

import fullLogo from '../../assets/full-logo.png'
import logo from '../../assets/logo.png'
import user from '../../assets/coordenador.jpg'

import SideBarItem from '../side-bar-item/side-bar-item';

const sideBarItems = [ 
    {   name:  'Início', 
        to: '/', 
        exact: true,
        iconClassName: "bi bi-house-door", 
    },
    {
        name: 'Conselho de Classe',
        to: `/conselho_de_classe`, 
        exact: true,
        iconClassName: "bi bi-people",
        subMenus: [
            {name: 'Conselho aberto', to: './conselho_de_classe/abertos'},
            {name: 'Conselho fechado',  to: './conselho_de_classe/fechados'},
        ]
    },
    {
        name: 'Banco de Perguntas', 
        to: `/banco_de_perguntas`, 
        iconClassName: "bi bi-question-circle"
    }

]

const SideBar = (props) => {
    const [inactive, setInactive] = useState(false)

    useEffect(() => {
        props.onCollapse(inactive);
    }, [inactive]);
    
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
                    sideBarItems.map((sideBarItem, index) => (
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
                {/* <li>
                    <a className="menu-item">
                        <div className="menu-icon">
                            <i class="bi bi-house-door"></i>
                        </div>
                        <span>Início</span>
                    </a>
                </li>
                <SideBarItem 
                    name={"Content"}
                    
                />
                <li>
                    <a className="menu-item">
                        <div className="menu-icon">
                            <i class="bi bi-question-circle"></i>
                        </div>
                        <span>Banco de perguntas</span>
                    </a>
                </li> */}
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