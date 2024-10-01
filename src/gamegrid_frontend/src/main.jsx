import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { useAuth, AuthProvider } from "./ic/use-auth-client";
import { NavSwitchProvider } from './nav-context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavSwitchProvider>
        <AuthProvider>
    <App />
  </AuthProvider>
    </NavSwitchProvider>
  </React.StrictMode>,
);
