/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const ThemeContext = createContext()



const ThemeProvider= ({children}) => {


    const [state, setState] = useState(false)
    const [theme, setTheme] = useState('')

    const change = (e) => {
        //console.log(e.target)
       const target = e.target.classList

        if(Array.from(target).includes('moon')){
                setTheme('dark')
                setState(!state)
        }
        else if(Array.from(target).includes('sun')){
            setTheme('')
            setState(!state)
        }
        
    }

    const data = {state, change, theme}

    return(
        <ThemeContext.Provider value={data}>
            {children}
        </ThemeContext.Provider>
    )
}


export {ThemeProvider}
export default ThemeContext
