import React, { useState, useContext, createContext } from 'react';

const Theme = createContext();

const ThemeProvider = ({ children }) => {
    const [initheme, settheme] = useState('light');

    return (
        <Theme.Provider value={[initheme, settheme]}>
            {children}
        </Theme.Provider>
    );
}

// custom hook
const useTheme = () => useContext(Theme);

export { useTheme, ThemeProvider };
