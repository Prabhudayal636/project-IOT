import React from 'react';
import {Naigate,Navigate,Outlet} from 'react-router-dom';

const ProtectedRoute=({allowedroutes}) => {
    const token=localStorage.getItem('token');
    const role=localStorage.getItem('role');

    if(!token) return <Navigate to="/" />
    if(!allowedRoles.includes(role)) return <Navigate to="/unauthorized" />;

    return <outlet/>;

};
export default ProtectedRoute;
