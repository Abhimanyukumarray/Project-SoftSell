import React from "react";

const Header = ({ darkMode, toggleTheme }) => {
  return (
    <header className="flex items-center justify-between p-6 shadow-md sticky top-0 z-50 bg-inherit">
      <h1 className="text-2xl font-bold">SoftSell</h1>
      <button onClick={toggleTheme} className="px-3 py-1 border rounded-full">
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
};

export default Header;
