import React, {useState} from 'react';

import './App.css';

import SideBarRoutes from './routes/routes';
import SideBar from './components/side-bar/side-bar';
import { SideBarProvider } from './context/side-bar-context';
import { AuthProvider } from './context/auth-context';

function App() {
  return (   
    <AuthProvider>
      <div className="App">
        <SideBarProvider>
          <SideBarRoutes />
        </SideBarProvider>
      </div>
    </AuthProvider> 
    
  );
}

export default App;
