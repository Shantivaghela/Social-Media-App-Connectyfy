import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    // const [Mode,setMode] = useState(false);
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState("");
    const [userdata,setUserData] = useState("");
    const [allusers,setAllUsers] = useState([]);
    // const [isLoggedIn,setIsloggedIn] = useState(token)
    // console.log(user._id);
    // if(user.username !== userdata.username){
    //     setUser({...user,username:userdata.username})
    // }

    let isLoggedIn = !!token;
    let haveUserData = !!userdata;
    // console.log(isLoggedIn);
    const storeTokenInLS = (serverToken) => {
        setToken(serverToken);
        return localStorage.setItem('token', serverToken);

    };

    
    const LogoutUser = () => {
        setToken("");
       
        return localStorage.removeItem("token");
    }
    const userAuthentication = async() => {
        try {
            

            const response = await fetch("http://localhost:8080/api/auth/user", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                }
                
            });
            if (response.ok) {
                const data = await response.json();
                setUser(data.userData);
                // console.log(data.userData);
                
            }
        }
        catch (error) {
            console.log("error from bakend", error);

            
        }
    }
    const getuserdata = async() =>{
        const userID = await user._id;
        // console.log(user._id);
        
        try {
            const response = await fetch(`http://localhost:8080/api/user/getuserdata/${userID}`,{
                method:"GET"
            });
            // const data = await response.json();


            if(response.ok){
                const data = await response.json();
                setUserData(data.userdata)
                // console.log("from user data",data.userdata);
                
            }

        } catch (error) {
            console.log("user data is not find",error);
            
        }
    }

    const getAllUsers = async() =>{
        try {
            const response = await fetch('http://localhost:8080/api/auth/allusers',{
                method:"GET"
            });
            if(response.ok){
                const data = await response.json();
                setAllUsers(data.usersWithImages);
                // console.log(data.usersWithImages);
                
                // console.log(data.allUsers);
                

            }
        } catch (error) {
            console.log("users data not found",error);
            
        }
    }
    // console.log(allusers/);
    
    useEffect(() => {
        userAuthentication();
    },[token]);
    useEffect(()=>{
        getuserdata();

    },[user,token])
    useEffect(()=>{
        getAllUsers();

    },[])

    return <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, LogoutUser, user, userdata,haveUserData,allusers}}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        throw new Error("useAuth used outside of the Provider");
    }
    return authContextValue;
}