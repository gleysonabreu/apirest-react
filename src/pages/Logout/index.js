import React, { useEffect } from 'react';
import { logout } from '../../services/auth';
import { Redirect } from 'react-router-dom';

export default function Logout() {
  
  useEffect(() => {
    logout();
    window.location.href='/';
  }, [])
  
  return (
    <div />
  );
}
