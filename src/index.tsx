import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as React from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import {BrowserRouter} from "react-router-dom"


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <StyledEngineProvider injectFirst>
      <App />
    </StyledEngineProvider>
    </BrowserRouter>
  </React.StrictMode>
    
  
);
