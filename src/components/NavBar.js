import { NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

export default function NavBar() {
  const [showCategories, setShowCategories] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDarkMode = () => {
    document.body.classList.toggle("dark");
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setShowCategories(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="logo">TaskFlow</span>
      </div>

      <div className="navbar-center">
        <NavLink to="/todos" className="nav-link">
          Todos
        </NavLink>

        <NavLink to="/contact" className="nav-link">
          Contact
        </NavLink>

        <button
          className={`nav-link category-trigger ${
            showCategories ? "open" : ""
          }`}
          onClick={() => setShowCategories(!showCategories)}
        >
          Categories ▾
        </button>

        {showCategories && (
          <div ref={dropdownRef} className="category-dropdown">
            <span>🏋🏽 Health</span>
            <span>✈️ Travel</span>
            <span>💼 Work</span>
            <span>📚 School</span>
            <span>🧠 Personal</span>
            <span>🛒 Errands</span>
          </div>
        )}
      </div>

      <div className="navbar-right">
        <button className="dark-toggle" onClick={toggleDarkMode}>
          🌙
        </button>
      </div>
    </nav>
  );
}
