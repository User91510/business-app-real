import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import BoxSx from './Components/UI/Box';
import CreateOrder from './Components/UI/CreateOrder';
import Header from './Components/UI/Header';
import Sidebar from './Components/UI/Sidebar';
import Info from './Components/UI/Info';

function App() {
  return (
    <div>
      <Header />
  <Routes>
    <Route path="/" element={<></>}/>
    <Route path="/CreateOrder" element={<CreateOrder />}/>
    <Route path="/Info" element={<Info />}/>
  </Routes>
  </div>
    
      );
}

export default App;
