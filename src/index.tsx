import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as React from 'react';
import { StyledEngineProvider } from '@mui/material/styles';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <App />
    </StyledEngineProvider>
  </React.StrictMode>
    
  
);
