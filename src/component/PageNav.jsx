import { NavLink } from "react-router-dom";
import Logo from "./Logo";

import "../App.css"
function PageNav() {
  return (
    <nav className="nav">
      <Logo/>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/price">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
         <li>
          <NavLink to="/login" className="navlogin">LogIn</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
