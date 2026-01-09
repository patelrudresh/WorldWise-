import Map from "./Map";
import SideBar from "./SideBar";
import "../style/AppLayout.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function AppLayOut() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <main className="app-layout">
      <SideBar />

      <div className="map-container">
        <Map />

        <div className="profile-bar">
          <img
            src={`https://ui-avatars.com/api/?name=${user?.name}&background=0D8ABC&color=fff`}
            alt="avatar"
            className="avatar"
          />

          <span className="username">{user?.name}</span>

          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </main>
  );
}

export default AppLayOut;
