import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    // const [Mode,setMode] = useState(false);
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState("");
    // const [isLoggedIn,setIsloggedIn] = useState(token)

    let isLoggedIn = !!token;
    console.log(isLoggedIn);
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
                console.log(data.userData);
                
            }
        }
        catch (error) {
            console.log("error from bakend", error);


        }
    }

    useEffect(() => {
        userAuthentication();
    }, []);

    return <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, LogoutUser, user }}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        throw new Error("useAuth used outside of the Provider");
    }
    return authContextValue;
}