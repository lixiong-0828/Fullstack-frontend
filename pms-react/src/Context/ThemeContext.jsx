import { createContext, useState } from "react";

export const themeContext = createContext()

export const themeProvider = ({chidren}) =>{

    const[theme,setTheme] = useState('light')

    const toggleTheme = (
        (previousTheme) =>{
            return previousTheme == 'light' ? 'dark' : 'light'

        }
    ) 

    return (
        <>
        <themeContext.Provider value={{theme ,toggleTheme}}>
            {chidren}
        </themeContext.Provider>
        </>
    )

}