import React, {Component} from 'react';
import { Outlet } from 'react-router-dom';
import './styles.css';

export default class User extends Component {

  render() {
    return (
    <div className="global">
      <h1>Usuários</h1>

      <div className="outlet">
        <Outlet />
      </div>
    </div>
    );
  }
}
