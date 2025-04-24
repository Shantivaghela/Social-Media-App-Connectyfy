import React,{useEffect} from 'react'
import { Link, Navigate } from 'react-router-dom';
import { useAuth } from "@/context/Admincontext";

function Logout() {

    const {LogoutUser} = useAuth();
        useEffect(()=>{
            LogoutUser();
        },[LogoutUser])
  return <Navigate to="/auth/sign-in" />
}

export default Logout
