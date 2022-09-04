import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import { MenuItems } from './Content/MenuItems';
import { createContext, useState } from 'react';
import Typography from './Components/Pages/Typography';

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light")

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <body id={theme}>
        <Header />
        <Routes>
          {MenuItems.map((menuItem, index) => {
                      return (
                          <Route exact path={menuItem.link} element={menuItem.element} key={index} />
                      );
                  })
              }
          <Route exact path="/work/typography" element={<Typography/>} />
        </Routes>
      </body>
    </ThemeContext.Provider>
  );
}

export default App;
