import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MarketProvider } from './context/MarketContext';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot( document.getElementById( 'root' ) );
root.render(
  <React.StrictMode>
    <MarketProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MarketProvider>
  </React.StrictMode>
);

