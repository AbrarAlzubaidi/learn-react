import {createContext} from "react";

// define the themes
export const themes = {
    dark: "",
    light: "white-content"
};

export const ThemeContext = createContext({
    theme: themes.dark,
    changeTheme: () => {}
})
