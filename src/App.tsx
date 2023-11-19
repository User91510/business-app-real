import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import BoxSx from './Components/UI/Box';
import CreateOrder from './Components/UI/CreateOrder';
import Header from './Components/UI/Header';
import Sidebar from './Components/UI/Sidebar';
import Info from './Components/UI/Info';
import Settings from './Components/UI/Settings';
import Reports from './Components/UI/Reports';

function App() {
  return (
    <div>
      <Header />
  <Routes>
    <Route path="/" element={<></>}/>
    <Route path="/CreateOrder" element={<CreateOrder />}/>
    <Route path="/Info" element={<Info />}/>
    <Route path="/Settings" element={<Settings />}/>
    <Route path="/Catalogs" element={<Settings />}/>
    <Route path="/Reports" element={<Reports />}/>
  </Routes>
  </div>
    
      );
}

export default App;
