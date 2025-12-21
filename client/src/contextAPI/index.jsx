import { createContext, useContext, useEffect, useState } from "react";
const API = import.meta.env.VITE_API_URL;


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    // const [Mode,setMode] = useState(false);
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState("");
    const [userdata, setUserData] = useState("");
    const [allusers, setAllUsers] = useState([]);
    const [posts,setPosts] = useState([]);
    const [allposts,setAllPosts] = useState([]);
    const [stories,setStories] = useState([]);
    // const [isLoggedIn,setIsloggedIn] = useState(token)
    // console.log(user._id);
    // if(user.username !== userdata.username){
    //     setUser({...user,username:userdata.username})
    // }
    // console.log(user);
    
    let isLoggedIn = !!token;
    let haveUserData = !!userdata;
    // console.log(isLoggedIn);
    const storeTokenInLS = (serverToken) => {
        setToken(serverToken);
        return localStorage.setItem('token', serverToken);

    };


    const LogoutUser = () => {
        setToken("");
        setUser("");
        setUserData("");
        return localStorage.removeItem("token");
    }
    const userAuthentication = async () => {
        try {


            const response = await fetch(`${API}/api/auth/user`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                }

            });
            if (response.ok) {
                const data = await response.json();
                setUser(data.userData);
               

            } 
        }
        catch (error) {
            console.log("error from bakend", error);


        }
    }
    const getuserdata = async () => {



        const userID = await user._id;
       
        try {
            const response = await fetch(`${API}/api/user/getuserdata/${userID}`, {
                method: "GET"
            });
            // const data = await response.json();


            if (response.ok) {
                const data = await response.json();
                setUserData(data.userdata)
                // console.log("from user data", data.userdata);

            }

        } catch (error) {
            console.log("user data is not find", error);

        }
    }

    const getAllUsers = async () => {
        try {
            const response = await fetch(`${API}/api/auth/allusers`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            if (response.ok) {
                const data = await response.json();
                setAllUsers(data.usersWithImages);
                // console.log(data.usersWithImages);

                // console.log(data.allUsers);


            } else {
                console.log("more data not fonund",response);

            }
        } catch (error) {
            console.log("users data not found", error);

        }
    }
    // console.log(allusers);


    const getposts = async()=>{
        try {
            const response = await fetch(`${API}/api/post/upload-post`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            if (response.ok) {
                const data = await response.json();
                setPosts(data.posts);
                // console.log(data.posts);
                                


            } else{
                console.log(response);
                
            }
        } catch (error) {
            console.log(error);
            
            
        }
    }

const getAllposts = async() =>{
    const userID = await user._id
    
    try {
        const response = await fetch(`${API}/api/post/get-posts/${userID}`, {
            method: "GET"
        });

        if (response.ok) {
            const data = await response.json();
            setAllPosts(data);

                            
        } else{
            console.log(response);
            
        }
    } catch (error) {
        console.log("index",error);
    }
}

const storyget = async() =>{
    try {
        const response = await fetch(`${API}/api/story/story-upload`,{
            method:"GET"
        });

        if (response.ok) {
            const data = await response.json();
            setStories(data.stories);

                            


        } 
    } catch (error) {
        
    }
}

    useEffect(() => {

            userAuthentication();
            getAllposts();

    }, [token]);
    useEffect(() => {
        if (user) {
            
            getuserdata();
            storyget();
            getAllposts();
        }
        
    }, [user, allusers]);
    
    useEffect(() => {
         if(user){
        getAllUsers();

            getposts();
        }

    }, [])

    return <AuthContext.Provider value={{
        isLoggedIn,
        storeTokenInLS,
        LogoutUser,
        user,
        userdata,
        haveUserData,
        allusers,
        getAllUsers,
        getuserdata,
        setUserData,
        posts,
        allposts,
        getposts,
        getAllposts,
        userAuthentication,
        stories,
        storyget
        
    }}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        throw new Error("useAuth used outside of the Provider");
    }
    return authContextValue;
}

// export { AuthContext };