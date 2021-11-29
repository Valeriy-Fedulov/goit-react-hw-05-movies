import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

function Navigation() {
  const active = ({ isActive }) => (isActive ? s.active : s.link);

  return (
    <>
      <nav className={s.nav}>
        <NavLink to="/" className={active}>
          Home
        </NavLink>
        <NavLink to="/movies" className={active}>
          Movie
        </NavLink>
      </nav>
      <hr />
    </>
  );
}

export { Navigation };
