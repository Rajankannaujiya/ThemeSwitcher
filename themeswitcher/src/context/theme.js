import { createContext,useContext } from "react";

export const themeContext=createContext({
    themeMode:"light",
    darkTheme:()=>{
        
    },

    lightTheme:()=>{
        
    }
})

export const ThemeProvider=themeContext.Provider;


// creating the custom hooks
export default function useTheme(){
    return useContext(themeContext)
}