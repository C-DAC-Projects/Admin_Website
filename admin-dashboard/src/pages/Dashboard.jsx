import { Link } from "react-router-dom";
import { FaPaw, FaBoxOpen, FaUsers, FaClipboardList } from "react-icons/fa";
import "./Dashboard.css";

const Dashboard = () => {
  const stats = {
    pendingPets: 8,
    products: 25,
    users: 120,
    orders: 45,
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <h1>Admin Dashboard</h1>
        <div className="stats-boxes">
          <Link to="/pending-pets" className="box purple">
            <FaPaw className="icon" />
            <p>Pending Pets</p>
            <h3>{stats.pendingPets}</h3>
          </Link>
          <Link to="/products" className="box blue">
            <FaBoxOpen className="icon" />
            <p>Products</p>
            <h3>{stats.products}</h3>
          </Link>
          <Link to="/users" className="box green">
            <FaUsers className="icon" />
            <p>Users</p>
            <h3>{stats.users}</h3>
          </Link>
          <Link to="/orders" className="box red">
            <FaClipboardList className="icon" />
            <p>Orders</p>
            <h3>{stats.orders}</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
