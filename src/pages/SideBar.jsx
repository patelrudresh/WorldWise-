import { Outlet } from "react-router-dom";
import Logo from "../component/Logo";
import "../style/SideBar.css";
import AppNav from "./AppNav";

function SideBar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <Logo /> 
        <AppNav/>    </div>   
       
    
      <div className="sidebar-content">
        <Outlet />
      </div>

      <footer className="sidebar-footer">
        <p>© 2025 Rudresh Patel</p>
      </footer>
    </aside>
  );
}

export default SideBar;
