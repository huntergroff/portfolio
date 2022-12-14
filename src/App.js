import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import { createContext, useState } from 'react';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Resume from './Components/Pages/Resume';
import Work from './Components/Pages/Work';
import Contact from './Components/Pages/Contact';
import Projects from './Components/Pages/Projects';
import Footer from './Components/Footer';

export const ThemeContext = createContext(null);
export const HomeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const [home, setHome] = useState("true");

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light")

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <body id={theme}>
        <Header home={home}/>
        <Routes>
          <Route exact path="/" element={<Home setHome={setHome}/>} />
          <Route exact path="/about" element={<About setHome={setHome}/>}/>
          <Route exact path="/work" element={<Work setHome={setHome}/>}/>
          <Route exact path="/resume" element={<Resume setHome={setHome}/>}/>
          <Route exact path="/contact" element={<Contact setHome={setHome}/>}/>
          <Route exact path="/projects" element={<Projects setHome={setHome}/>}/>
        </Routes>
        <Footer home={home}/> 
      </body>
    </ThemeContext.Provider>
  );
}

export default App;
