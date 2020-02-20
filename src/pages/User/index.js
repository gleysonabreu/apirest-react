import React from 'react';
import { Outlet } from 'react-router-dom';
import './styles.css';

export default function User() {
  return (
  <div className="global">
    <h1>Usuários</h1>

    <div className="outlet">
      <Outlet />
    </div>
  </div>
  );
}
