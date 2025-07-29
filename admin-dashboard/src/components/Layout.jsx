import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <main className="main-content">
        <Outlet /> {/* This renders child routes */}
      </main>
    </div>
  );
};

export default Layout;
