import React from "react";
import { FaPaw, FaBox, FaShoppingCart, FaUserCheck, FaUserClock, FaClipboardList } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/dashboard.css";

const Dashboard = () => {
  const data = [
    {
      title: "Total Pets",
      value: 120,
      icon: <FaPaw />,
      link: "/admin/pets",
      color: "#00d1b2",
    },
    {
      title: "Total Products",
      value: 75,
      icon: <FaBox />,
      link: "/admin/products",
      color: "#209cee",
    },
    {
      title: "Pending Product Orders",
      value: 14,
      icon: <FaShoppingCart />,
      link: "/admin/orders",
      color: "#ff3860",
    },
    {
      title: "Approved Vendors",
      value: 8,
      icon: <FaUserCheck />,
      link: "/admin/vendors",
      color: "#ffdd57",
    },
    {
      title: "Pending Vendor Approval",
      value: 5,
      icon: <FaUserClock />,
      link: "/admin/vendors/pending",
      color: "#6c63ff",
    },
    {
      title: "Pending Pet Orders",
      value: 7,
      icon: <FaClipboardList />,
      link: "/admin/orders/pets/pending",
      color: "#48c78e",
    },
  ];

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Admin Dashboard</h1>
      <div className="dashboard-cards">
        {data.map((item, index) => (
          <Link 
            to={item.link} 
            key={index} 
            className="dashboard-card"
            style={{ borderLeftColor: item.color }}
          >
            <div className="card-icon" style={{ color: item.color }}>
              {item.icon}
            </div>
            <div className="card-content">
              <h3>{item.title}</h3>
              <p>{item.value}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;