import React, { useEffect, useState } from "react";
import {ThemeContext, themes} from "../theme/CardTheme";

export default function ThemeContextWrapper(props){
    const [theme, setTheme] = useState(themes.dark)

    function changeTheme(theme){
        setTheme(theme);
    }

    useEffect(()=>{
        switch (theme){
            case theme.light:
                document.body.classList.add('white-content');
                break;
            case theme.dark:
                document.body.classList.remove('white-content');
                break;
        }
    }, [theme])

    return(
        <ThemeContext.Provider value={{theme: theme.at, changeTheme: changeTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
};

