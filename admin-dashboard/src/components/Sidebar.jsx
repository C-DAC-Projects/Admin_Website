import { FaUsers, FaDog, FaBoxOpen, FaUserMd, FaCalendarCheck, FaTachometerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/cutipets-logo.png";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo-section">
        <img src={logo} alt="Cutipets Logo" className="logo" />
        <h2>Cutipets</h2>
      </div>

      <ul className="nav-links">
        <li><Link to="/dashboard"><FaTachometerAlt className="icon" /> Dashboard</Link></li>
        <li><Link to="/pending-pets"><FaDog className="icon" /> Pending Pets</Link></li>
        <li><Link to="/products"><FaBoxOpen className="icon" /> Products</Link></li>
        <li><Link to="/users"><FaUsers className="icon" /> Users</Link></li>
        <li><Link to="/orders"><FaCalendarCheck className="icon" /> Orders</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
