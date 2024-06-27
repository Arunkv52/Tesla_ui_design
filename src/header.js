import logo from "./assets/tesla-9.svg";
import "./header.css";

function Header() {
  return (
    // Overall Head
    <div className="Top_menu">
      <div className="menu-Left">
        <img src={logo} className="Header-logo" alt="logo" />
      </div>
      <div className="Center-Menu">
        <ul>
            <li>Home</li>
            <li>Model S</li>
            <li>Model 3</li>
            <li>Model X</li>
            <li>Model Y</li>
        </ul>
      </div>
      <div className="Right-Menu">
        <ul>
            <li> Shop </li>
            <li>Tesla Account</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;

