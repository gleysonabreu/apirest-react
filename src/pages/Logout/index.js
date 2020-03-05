import React,{useEffect, useState} from 'react';
import { logout } from '../../services/auth';
import { Redirect } from 'react-router-dom';
import { browserHistory } from 'react-router';

function Logout(){

  const [redirect, setRedirect] = useState(false);

  const exit = () => {
    logout();
    setRedirect(true);
  }

  useEffect(
    () => {
      exit();
    },
  [])
    
    return redirect ?  window.location.href="/": window.location.href="/";

}

export default Logout;