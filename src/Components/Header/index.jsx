import "./style.css";
export const Header = () => {
  return (
    <div className="header-part">
      <div className="header-logo"></div>
      <div className="header-menu-wrapper">
        <ul classname="header-menu">About me</ul>
        <ul classname="header-menu">Project</ul>
        <ul classname="header-menu">Contact</ul>
      </div>
    </div>
  );
};
