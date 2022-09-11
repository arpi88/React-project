import "./style.css";
export const Header = () => {
  return (
    <div className="header-part">
      <div className="header-logo">
        <img src="ARPI H_free-file(4).png" alt="" />
      </div>
      <div className="header-menu-wrapper">
        <ul className="header-menu">
          <li> About me </li>
          <li>Project</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};
