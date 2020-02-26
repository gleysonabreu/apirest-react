import React from 'react';
import logo from '../../logo.svg';

 import './styles.css';

export default function Loading() {
  return (
    <div className="loading" id="loading">
      <div className="loading-image">
        <img src={logo} alt="Loading" />
      </div>
      <h1 className="title">Gleyson</h1>
    </div>
  );
}
