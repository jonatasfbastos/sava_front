import React, {useState} from 'react';

import './App.css';
import ClassCouncil from './pages/class-council/class-council';
import QuestionBank from './pages/question-bank-page/question-bank-page';
import RecoverPassword from './pages/recover-password/recover-password';
import Login from './pages/login/login';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import SideBar from './components/side-bar/side-bar';


const Home = () => {
  return <h1>Ínicio</h1>
}

function App() {
  const [inactive, setInactive] = useState(false)

  return (    
    <div className="App">
      <Router>
        <SideBar onCollapse={(inactive) => {
          setInactive(inactive)
        }} />

        <div className={`container${inactive ? " inactive" : ""} `}>
          <Routes>
            <Route exact path={'/'} element={<Home />} />
            <Route path={'/conselho_de_classe'} element={<ClassCouncil/>} />
            <Route path={'/banco_de_perguntas'} element={<QuestionBank/>} />
            <Route path={'/recuperar_senha'} element={<RecoverPassword/>} />
            <Route path={'/login'} element={<Login/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
