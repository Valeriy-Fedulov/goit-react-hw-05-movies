import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movie</NavLink>
      </nav>
    </>
  );
}

export { Navigation };
