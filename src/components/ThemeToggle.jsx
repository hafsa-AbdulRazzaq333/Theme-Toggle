import React, { useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState({
    background: "bg-white",
    text: "text-gray-800",
  });

  const [btnState, setBtnState] = useState("Enable Dark Mode 🌙");

  const toggleTheme = () => {
    if (theme.background === "bg-white") {
      setTheme({
        background: "bg-gray-900",
        text: "text-white",
      });
      setBtnState("Disable Dark Mode ☀️");
    } else {
      setTheme({
        background: "bg-white",
        text: "text-gray-800",
      });
      setBtnState("Enable Dark Mode 🌙");
    }
  };

  return (
    <div
      className={`w-full h-screen flex flex-col justify-center items-center transition-all duration-500 ${theme.background} ${theme.text}`}
    >
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6">Theme Toggle App</h1>

      {/* Button */}
      <button
        onClick={toggleTheme}
        className="px-6 py-3 bg-red-600 hover:bg-red-500 text-white rounded-full shadow-lg transition-all duration-300"
      >
        {btnState}
      </button>

      {/* Footer text */}
      <p className="mt-5 text-sm opacity-70">Built with React + Tailwind CSS</p>
    </div>
  );
};

export default ThemeToggle;

/*

import React, { useState } from "react"; const ThemeToggle = () => { const [theme, setTheme] = useState({ background: "bg-white", text: "text-gray-800", }); const [btnState, setBtnState] = useState("Enable dark Mode"); const toggleTheme = () => { if (theme.background === "bg-white") { setTheme({ background: "bg-gray-900", text: "text-white", }); setBtnState("Disable dark Mode"); } else { setTheme({ background: "bg-white", text: "text-gray-900", }); setBtnState("Enable dark Mode"); } }; return ( <div className={w-full h-screen flex justify-center items-center ${theme.background} ${theme.text}} > <button className="px-4 py-2 bg-red-800 rounded-md text-sm font-medium text-white hover:bg-red-500" onClick={toggleTheme} > {btnState} </button> </div> ); }; export default ThemeToggle;

Global Theme Toggle (React Context) — Steps
1️⃣ ThemeContext file banao
ThemeContext.jsx create karo
createContext + useState se dark mode state banao
2️⃣ Provider wrap karo app ko
main.jsx / index.js me <ThemeProvider> se <App /> wrap karo
Taake poori website access le sake
3️⃣ Global state create karo
dark (true/false) state banao
toggleTheme() function banao
4️⃣ Value pass karo Context me
dark aur toggleTheme ko provider me pass karo
So components access kar saken
5️⃣ Kisi bhi component me use karo
useContext(ThemeContext) use karo
dark aur toggleTheme destructure karo
6️⃣ Theme apply karo
Conditional classes use karo:
dark ? "bg-gray-900 text-white" : "bg-white text-black"
7️⃣ Button se toggle karo
onClick={toggleTheme} laga do
Poora website instantly change ho jayega
⚡ Result
1 button click → poori website ka theme change
Navbar, Home, Footer sab sync ho jate hain 👍



import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    setDark(!dark);
  };

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};


import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Navbar = () => {
  const { dark, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={`p-4 ${
        dark ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
};

export default Navbar;
*/
