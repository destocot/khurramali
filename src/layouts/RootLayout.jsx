import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

import "../styles/nprogress.css";

import nprogress from "nprogress";
import { useEffect, useState } from "react";

export default function RootLayout() {
  const location = useLocation();
  const [colors, setColors] = useState(false);

  useEffect(() => {
    nprogress.start();
    nprogress.done();
  }, [location.pathname]);

  useEffect(() => {
    if (colors === true) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [colors]);

  return (
    <>
      <button onClick={() => setColors((state) => !state)} className="colors">
        {colors ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
      </button>
      <header className="header">
        <Link to="/" className="title">
          Khurram Ali
        </Link>
        <nav className="nav">
          <NavLink className="nav__link" to="/">
            Home
          </NavLink>
          <NavLink className="nav__link" to="/projects">
            Projects
          </NavLink>
          <NavLink className="nav__link" to="/poetry">
            Poetry
          </NavLink>
        </nav>
      </header>
      <main className="main">
        <Outlet context={colors} />
      </main>
      <footer className="footer">
        <span>&copy; Khurram Ali - 2023</span>
      </footer>
    </>
  );
}
