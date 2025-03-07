import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    // const [Mode,setMode] = useState(false);
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState("");
    const [userdata,setUserData] = useState("");
    // const [isLoggedIn,setIsloggedIn] = useState(token)
    // console.log(user._id);
    

    let isLoggedIn = !!token;
    // console.log(isLoggedIn);
    const storeTokenInLS = (serverToken) => {

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
        console.log(userID);
        
        try {
            const response = await fetch(`http://localhost:8080/api/user/getuserdata/${userID}`,{
                method:"GET"
            });
            // const data = await response.json();


            if(response.ok){
                const data = await response.json();
                setUserData(data.userdata)
                console.log("from user data",data.userdata);
                
            }

        } catch (error) {
            console.log("user data is not find",error);
            
        }
    }

    useEffect(() => {
        userAuthentication();
    }, []);
    useEffect(()=>{
        getuserdata();

    },[user._id])

    return <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, LogoutUser, user, userdata }}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        throw new Error("useAuth used outside of the Provider");
    }
    return authContextValue;
}