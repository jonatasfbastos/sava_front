
import Login from '../pages/login/login';
import Item from '../components/question-item/question-item';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Navigate,
  Link,
  Redirect
} from "react-router-dom";

import PageWraper from "../pages/page-wrapper/page-wraper";
import { Route } from 'react-router-dom';
import { SideBarProvider } from '../context/side-bar-context';
import { ClassCouncilModalProvider } from "../context/class-council-modal-context";
import { isAuthenticated } from "../services/auth";
import PageWraperSettings from '../pages/page-wraper-settings/page-wraper-settings';


const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ path: "/login", state: { from: props.location } }} />
        )
      }
    />
 );



 const SideBarRoutes  = () => (
  <Router>
    <SideBarProvider >
      <ClassCouncilModalProvider>
        <Switch>
	
            <Route path="/login" component={Login} />          
            <Route path="/signup" component={() => <h1>SignUp</h1>} />
			<PrivateRoute path='/conselho_de_classe' component={() => (<PageWraper to="conselho_de_classe"/>)} />
			<PrivateRoute path='/cadastrar' component={() => (<PageWraperSettings/>)} />
            <PrivateRoute path='/banco_de_perguntas' component={() => (<PageWraper to="banco_de_perguntas"/>)} />
			<PrivateRoute path="/" component={() => (<PageWraper to="" />)} />
		</Switch>
        </ClassCouncilModalProvider>
      </SideBarProvider>
  </Router>   
 )


export default SideBarRoutes;