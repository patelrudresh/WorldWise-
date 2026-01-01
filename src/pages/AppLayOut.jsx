
// import { Outlet } from "react-router-dom";
import Map from "./Map";
import SideBar from "./SideBar";
import "../style/AppLayout.css"

function AppLayOut() {
  return (
    <main className="App-layout">

      <SideBar />
    
      <Map />

    </main>
  );
}
export default AppLayOut
