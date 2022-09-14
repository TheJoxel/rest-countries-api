import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeState = ({children}) => {

    const [isDarkTheme, setIsDarkTheme] = useState(false)


    function activeThemeDark (){
        setIsDarkTheme(!isDarkTheme)
    }
  

  return (
    <ThemeContext.Provider value={{activeThemeDark, isDarkTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}