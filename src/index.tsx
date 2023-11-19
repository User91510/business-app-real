import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as React from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import {BrowserRouter} from "react-router-dom"
import { Provider } from 'react-redux';
import { store } from './Redux/Store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <StyledEngineProvider injectFirst>
          <App />
        </StyledEngineProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
    
  
);
