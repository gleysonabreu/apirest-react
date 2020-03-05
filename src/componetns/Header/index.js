import React from 'react';
import {Link} from 'react-router-dom';
import { isAuthenticated } from '../../services/auth';
import './styles.css';
import logo from '../../logo.svg';

export default function Header(){

  return (
    <div className="header">
    <div className="infos">
    <img src={logo} alt="Loading" />
    <h3>GLEYSON</h3>
    </div>
      <div>
        <Link className="link-add" to={"/users/add"}>Add user</Link>
        {isAuthenticated() ? <Link className="link-add" to={"/logout"}>Logout</Link> : <Link className="link-add" to={"/login"}>Login</Link>}
      </div>
    </div>
  );

}