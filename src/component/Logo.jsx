import { NavLink } from "react-router-dom"

function Logo() {
  return (
    <NavLink to="/" className="logo-box">
        <img src="/earth.png" alt="WorldWise logo" />
        <span>WorldWise</span>
      </NavLink>
  )
}

export default Logo
