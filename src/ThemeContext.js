import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    document.documentElement.style.setProperty('--background-color', darkMode ? '#2c343c' : '#FFF');
    document.documentElement.style.setProperty('--text-color', darkMode ? '#FFF' : '#000');
    document.documentElement.style.setProperty('--box-shadow-color', darkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)');
    document.documentElement.style.setProperty('--table-background-color', darkMode ? '#3e3e3e' : '#f9f9f9');
    document.documentElement.style.setProperty('--table-header-color', darkMode ? '#2c2c2c' : '#e0e0e0');
    document.documentElement.style.setProperty('--table-row-even-color', darkMode ? '#4a4a4a' : '#f1f1f1');
    document.documentElement.style.setProperty('--table-row-odd-color', darkMode ? '#3a3a3a' : '#ffffff');
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
