import { NavLink } from "react-router-dom"
import '../style/AppNav.css'
function AppNav() {
  return (
    <nav className="appnav ">
     
      <NavLink to="/app/city" className="nav-btn">City</NavLink>
        <NavLink to="/app/country" className="nav-btn">Country</NavLink>
    </nav>
  )
}

export default AppNav
