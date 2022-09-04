import "./style.css";
export const Header = () => {
  return (
    <div className="header-part">
      <div className="header-logo">
        <img src="ARPI H_free-file(4).png" alt="" />
      </div>
      <div className="header-menu-wrapper">
        <ul>About me</ul>
        <ul>Project</ul>
        <ul>Contact</ul>
      </div>
    </div>
  );
};
