import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css';

export default function Header(){

  return (
    <div className="header">
    <h3>GLEYSON</h3>
    <Link className="link-add" to={"/users/add"}>Add user</Link>
    </div>
  );

}