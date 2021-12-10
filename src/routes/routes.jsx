import React, {useState} from "react";
import Login from '../pages/login/login';

import { SideBarProvider } from '../context/side-bar-context';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
  Navigate,
  Link,
} from "react-router-dom";

import './routes.css'
import PageWraper from "../pages/page-wrapper/page-wraper";
import { ClassCouncilModalProvider } from "../context/class-council-modal-context";
import { isAuthenticated } from "../services/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Navigate to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

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