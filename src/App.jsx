import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import "./index.css"; // Ensure this line is present to import your CSS file

export const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div
      className={`overflow-x-hidden antialiased selection:bg-cyan-300 selection:text-cyan-900
        ${darkMode ? "bg-gradient-radial-dark" : "bg-gradient-radial-light"} 
        absolute inset-0 -z-10 h-full w-full`}
    >
      <div className="container mx-auto px-8">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Contacts />
      </div>
    </div>
  );
};

export default App;
