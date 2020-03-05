import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { getToken, isAuthenticated } from '../../services/auth';
import './styles.css';
import logo from '../../logo.svg';
import jwt from 'jsonwebtoken';

export default function Header(){

  const [firstName, setFirstname] = useState("GLEYSON");
  const [lastName, setLastname] = useState("");

  useEffect(() => {
    if(isAuthenticated()){
      let { id, firstname, lastname, email } = jwt.decode(getToken()).data;
      setFirstname(firstname);
      setLastname(lastname);
    }
  }, []);
  

  return (
    <div className="header">
    <div className="infos">
    <img src={logo} alt="Loading" />
  <h3 className="userName">{`${firstName} ${lastName}`}</h3>
    </div>
      <div>
        <Link className="link-add" to={"/users/add"}>Add user</Link>
        {isAuthenticated() ? <Link className="link-add" to={"/logout"}>Logout</Link> : <Link className="link-add" to={"/login"}>Login</Link>}
      </div>
    </div>
  );

}