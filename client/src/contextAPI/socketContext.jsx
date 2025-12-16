import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useAuth } from ".";
const API = import.meta.env.VITE_API_URL;

export const SocketContext = createContext();
export const useSocketContext = () => {
    return useContext(SocketContext);
}
export const SocketProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [notifications, setNotifications] = useState([]);
    const [onlineusers, setOnlineUsers] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        if (user) {


            const socket = io(API, {
                withCredentials: true,
                query: {
                    userId: user._id
                },
            });
            setSocket(socket);
            socket.on("getOnlineUsers", (users) => {
                setOnlineUsers(users);
            });
            socket.on("connect_error", (err) => {
                console.error("Socket connect_error:", err.message, err);
            });
            socket.on("connect", () => {
                console.log("Socket connected:", socket.id);
            });
            return () => socket.close();
        } else {
            if (socket) {
                socket.close();
                setSocket(null);
            }
        }

    }, [user])
    useEffect(() => {

        socket?.on("getNotification", data => {
            setNotifications(pre => [...pre, data]);
        });
    }, [socket])






    return (
        <SocketContext.Provider value={{ socket, onlineusers, notifications }}>
            {children}
        </SocketContext.Provider>
    )
}
