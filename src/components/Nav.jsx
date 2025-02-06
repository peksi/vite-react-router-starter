import { NavLink, Link } from "react-router";

export const Nav = () => {
  return (
    <div className="mainNav">
      <div>
        {/* NavLink makes it easy to show active states */}
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Front Page
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          About Page
        </NavLink>
      </div>
      <div>
        <Link target="_blank" to="https://google.fi">
          Google
        </Link>
      </div>
    </div>
  );
};

export default Nav;
