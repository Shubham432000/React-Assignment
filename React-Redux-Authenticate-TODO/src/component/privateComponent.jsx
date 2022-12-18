import React from 'react'
import { Outlet,Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
//import Navbar from '../component/Navbar';

 const PrivateComponent = () => {
  const isLoggedIn = useSelector((state) => state.account.isLoggedIn);

 
  if (!isLoggedIn) {
    return <Navigate to = "/"/>;
    
  }
  
  return (
    <>
      
      <Outlet/>
    </>
  );
}
export default PrivateComponent;