import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'

const ProtectedComponent = () => {

    const isLogged = useSelector((state)=>state.accountReducer)
  

    if(!isLogged){
Navigate("/")
    }
  return (
    <>
    <Outlet/>
    </>
  )
}

export default ProtectedComponent