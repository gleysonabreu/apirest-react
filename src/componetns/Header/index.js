import React from 'react';
import {Link} from 'react-router-dom';
import { isAuthenticated } from '../../services/auth';
import './styles.css';

export default function Header(){

  return (
    <div className="header">
    <h3>GLEYSON</h3>
      <div>
        <Link className="link-add" to={"/users/add"}>Add user</Link>
        {isAuthenticated() ? <Link className="link-add" to={"/logout"}>Logout</Link> : <Link className="link-add" to={"/login"}>Login</Link>}
      </div>
    </div>
  );

}