import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const SideBarItem = (props) => {
    const { name, subMenus, iconClassName, sideBarActive, to, exact } = props;
    const [expand, setExpand] = useState(false)

    return (
        <li>
            <NavLink 
                to={to} 
                exact 
                onClick={() => setExpand(!expand)} 
                className="menu-item"
            >
                <div className="menu-icon">
                    <i class={iconClassName}></i>
                </div>
                <span>{name}</span>
            </NavLink>
            {
                subMenus && subMenus.length > 0 ? (
                <ul className={`sub-menu ${expand && !sideBarActive ? "active" : ""}`}>
                    {subMenus.map((menu, index) => ( 
                        <li key={index}>
                            <NavLink to={menu.to}>{menu.name}</NavLink>
                        </li>
                    ))}
                </ul>) : null
            }
            
        </li>
    );
}

export default SideBarItem;