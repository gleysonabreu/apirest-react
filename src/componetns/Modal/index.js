import React from 'react';
import logo from '../../logo.svg';
import { Link } from 'react-router-dom';
import './styles.css';

export default function Loading() {
  return (
    <div className="modal" id="modal">
      <div className="loading-image">
        <img src={logo} alt="Loading" />
      </div>
      <h1 className="title">Unauthenticated user</h1>
      <Link to={`/login`}>Login</Link>
    </div>
  );
}
