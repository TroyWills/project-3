import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './footer.css';

function LoginButton() {
  const {
    isAuthenticated,
    loginWithPopup,
  } = useAuth0();

  
  return !isAuthenticated && (
    <button id="adminLogin" onClick={loginWithPopup}>Login As Admin</button>
  );
}

export default LoginButton;