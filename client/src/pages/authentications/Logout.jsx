import React,{useEffect} from 'react'
import { Link, Navigate } from 'react-router-dom';
import { useAuth } from '../../contextAPI';

function Logout() {

    const {LogoutUser} = useAuth();
        useEffect(()=>{
            LogoutUser();
        },[LogoutUser])
  return <Navigate to="/" />
}

export default Logout
