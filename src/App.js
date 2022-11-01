import { useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div>
      <div className="container">
        <Navbar toggleDarkMode={handleClick} darkMode={darkMode} />
        <Main darkMode={darkMode} />
      </div>
    </div>
  );
};

export default App;
