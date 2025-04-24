import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import './App.css'
import Logout from "./pages/auth/Logout";
import { useAuth } from "./context/Admincontext";
import { SignIn } from "./pages/auth";

function App() {
    const {isLoggedIn,LogoutUser} = useAuth();
  if(isLoggedIn){

    return (
      <Routes>
        
        <Route path="/dashboard/*" element={<Dashboard /> } />
        <Route path="/auth/*" element={<Auth />} />
        <Route path="/logout" element={<Logout/>} />
        <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
        
      </Routes>
    );
  }else{
    return (
      <Routes>
        
        {/* <Route path="/auth/sign-in" element={<SignIn /> } /> */}
        <Route path="/dashboard/*" element={<SignIn /> } />
        <Route path="/auth/*" element={<SignIn />} />
        <Route path="/logout" element={<SignIn/>} />
        <Route path="*" element={<SignIn to="/dashboard/home" replace />} />
        
        
      </Routes>
    );
  }
}

export default App;
