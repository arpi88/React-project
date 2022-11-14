import "./style.css";
import { Nav } from "../Nav";
export const Header = () => {
  return (
    <div className="header-part">
      <div className="header-logo">
        <img src="AR.png" className="logo-img" alt="img" />
      </div>
      <header className="project-header">
        <Nav />
      </header>
    </div>
  );
};
