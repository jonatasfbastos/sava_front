import React, {useState} from "react";
import Login from '../pages/login/login';

import { SideBarProvider, useSideBar } from '../context/side-bar-context';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import './routes.css'
import PageWraper from "../pages/page-wrapper/page-wraper";

const Home = () => {
    return <h1>Ínicio</h1>
  }

const SideBarRoutes = () => {

    return (
        <Router>
            <SideBarProvider >
                <Routes>
                    <Route exact path={'/'} element={<PageWraper to="" />} />
                    <Route path={'/conselho_de_classe'} element={<PageWraper to="conselho_de_classe"/>} />
                    <Route path={'/banco_de_perguntas'} element={<PageWraper to="banco_de_perguntas"/>} />
                    <Route path={'/login'} element={<Login/>} />
                </Routes>
            </SideBarProvider>
        </Router>
    )
}

export default SideBarRoutes;