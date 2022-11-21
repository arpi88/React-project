import "./style.scss";
import { NavLink } from "react-router-dom";
export const Nav = () => {
  return (
    <ul className="nav-list">
      <li className="nav-item">
        <NavLink
          to="/"
          className={({ isActive }) =>
            "nav-link" + (isActive ? "selected" : "")
          }
          end
        >
          Todo List
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/about-me"
          className={({ isActive }) =>
            "nav-link" + (isActive ? "selected" : "")
          }
          end
        >
          About me
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink
          to="/contact-me"
          className={({ isActive }) =>
            "nav-link" + (isActive ? "selected" : "")
          }
          end
        >
          Contact me
        </NavLink>
      </li>
    </ul>
  );
};
