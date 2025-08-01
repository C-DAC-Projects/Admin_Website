import React from "react";
import { 
  FaTachometerAlt, FaPaw, FaBox, FaClock, 
  FaPlusCircle, FaUsers, FaTimes 
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import "../styles/global.css";

const Sidebar = ({ isOpen, toggleSidebar, isMobile }) => {
  const location = useLocation();
  
  // Menu items with routes
  const menuItems = [
    { 
      title: "Dashboard", 
      icon: <FaTachometerAlt />, 
      path: "/dashboard" 
    },
    { 
      title: "Pets", 
      icon: <FaPaw />, 
      path: "/admin/pets" 
    },
    { 
      title: "Products", 
      icon: <FaBox />, 
      path: "/admin/products" 
    },
    { 
      title: "Pending Product Orders", 
      icon: <FaClock />, 
      path: "/admin/orders" 
    },
    { 
      title: "Pending Pet Orders", 
      icon: <FaClock />, 
      path: "/admin/orders/pets" 
    },
    { 
      title: "Add Products", 
      icon: <FaPlusCircle />, 
      path: "/admin/products/add" 
    },
    { 
      title: "Vendor Approvals", 
      icon: <FaUsers />, 
      path: "/admin/vendors" 
    }
  ];

  return (
    <>
      <div className={`sidebar ${isMobile ? (isOpen ? "open" : "closed") : ""}`}>
        <div className="sidebar-header">
          <h3 className="sidebar-title">Admin Panel</h3>
          {isMobile && (
            <button className="close-btn" onClick={toggleSidebar}>
              <FaTimes />
            </button>
          )}
        </div>
        <ul className="sidebar-menu">
          {menuItems.map((item, index) => (
            <li 
              key={index}
              className={location.pathname === item.path ? "active" : ""}
              onClick={isMobile ? toggleSidebar : undefined}
            >
              <Link to={item.path} className="sidebar-link">
                <span className="sidebar-icon">{item.icon}</span>
                <span className="sidebar-text">{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {isMobile && isOpen && (
        <div className="sidebar-overlay" onClick={toggleSidebar} />
      )}
    </>
  );
};

export default Sidebar;