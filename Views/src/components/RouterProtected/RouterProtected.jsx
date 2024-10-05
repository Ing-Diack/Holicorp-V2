import React, { useContext } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { AuthContext } from '../../utils/Context/AuthContext';
function RouterProtected({ children }) {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  return user === null ? (

    <Navigate to="/connexion" replace state={{ path: location.pathname }} />

  ) : (
    children
  );
}

export default RouterProtected
