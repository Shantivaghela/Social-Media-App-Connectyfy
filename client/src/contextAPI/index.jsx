import { createContext,useState } from "react";

export const ThemeMode = createContext();

export const ThemeProvider = ({children}) =>{
    // const [Mode,setMode] = useState(false);

    return <ThemeMode.Provider value
    ={Mode}> {children}</ThemeMode.Provider>
}
