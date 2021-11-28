import React, {useState} from 'react';

import './App.css';

import SideBarRoutes from './routes/routes';
import SideBar from './components/side-bar/side-bar';
import { SideBarProvider } from './context/side-bar-context';


function App() {
  return (    
    <div className="App">
      <SideBarProvider>
        <SideBarRoutes />
      </SideBarProvider>
    </div>
  );
}

export default App;
