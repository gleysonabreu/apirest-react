import React from 'react';
import logo from '../../logo.svg';

 import './styles.css';

export default function Loading() {
  return (
    <div className="loading">
      <div className="loading-image">
        <img src={logo} />
      </div>
      <h1>Gleyson</h1>
    </div>
  );
}
