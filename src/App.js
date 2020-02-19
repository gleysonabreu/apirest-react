import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Outlet, Switch } from 'react-router-dom';
import Routes from './routes';

function App() {
  return (
    <div className="App-header">
      <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <Outlet />
      </>
    </div>
  );
}

export default App;
