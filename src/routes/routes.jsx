import React, {useState} from "react";
import Login from '../pages/login/login';

import { SideBarProvider } from '../context/side-bar-context';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import './routes.css'
import PageWraper from "../pages/page-wrapper/page-wraper";
import { ClassCouncilModalProvider } from "../context/class-council-modal-context";

const SideBarRoutes = () => {

    return (
        <Router>
            <SideBarProvider >
                <ClassCouncilModalProvider> 
                    <Routes>
                        <Route exact path={'/'} element={<PageWraper to="" />} />
                        <Route path={'/conselho_de_classe'} element={<PageWraper to="conselho_de_classe"/>} />
                        <Route path={'/banco_de_perguntas'} element={<PageWraper to="banco_de_perguntas"/>} />
                        <Route path={'/login'} element={<Login/>} />
                    </Routes>
                </ClassCouncilModalProvider>
            </SideBarProvider>
        </Router>
    )
}

export default SideBarRoutes;