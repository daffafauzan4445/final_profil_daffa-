import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <ul>

        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            About Me
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Contact Me
          </NavLink>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;