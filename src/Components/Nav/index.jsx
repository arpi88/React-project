import "./style.css";
import { Link } from "react-router-dom";
export const Nav = () => {
  return (
    <ul className="nav-list">
      <li className="nav-item">
        <Link
          to="/"
          className={({ isActive }) =>
            "nav-link" + (isActive ? "selected" : "")
          }
          end
        >
          Todo List
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/aboutMe" className="nav-link">
          About me
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/contactMe " className="nav-link">
          Contact me
        </Link>
      </li>
    </ul>
  );
};
