import React, { useState, useEffect } from "react";
import { 
  FaPaw, FaBox, FaShoppingCart, FaClipboardList 
} from "react-icons/fa";
import { Link } from "react-router-dom";
import api from "../utils/axiosSetup";
import { toast } from 'react-toastify';
import "../styles/dashboard.css";

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalPets: 0,
    totalProducts: 0,
    pendingProductOrders: 0,
    pendingPetOrders: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await api.get("/api/dashboard/stats");
        setStats(response.data);
      } catch (error) {
        toast.error("Failed to load dashboard data");
      } finally {
        setLoading(false);
      }
    };
    
    fetchStats();
  }, []);

  if (loading) return <div className="dashboard-container">Loading dashboard...</div>;

  const data = [
    {
      title: "Total Pets",
      value: stats.totalPets,
      icon: <FaPaw />,
      link: "/admin/pets",
      color: "#00d1b2",
    },
    {
      title: "Total Products",
      value: stats.totalProducts,
      icon: <FaBox />,
      link: "/admin/products",
      color: "#209cee",
    },
    {
      title: "Pending Product Orders",
      value: stats.pendingProductOrders,
      icon: <FaShoppingCart />,
      link: "/admin/orders",
      color: "#ff3860",
    },
    {
      title: "Pending Pet Orders",
      value: stats.pendingPetOrders,
      icon: <FaClipboardList />,
      link: "/admin/orders/pets",
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