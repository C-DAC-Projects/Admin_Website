import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PendingPets from "./pages/PendingPets";
import Products from "./pages/Products";
import Users from "./pages/Users";
import Orders from "./pages/Orders";
import Login from "./pages/Login";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Routes>
        {/* Login route (standalone, no sidebar) */}
        <Route path="/" element={<Login />} />

        {/* All protected routes under Layout */}
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="pending-pets" element={<PendingPets />} />
          <Route path="products" element={<Products />} />
          <Route path="users" element={<Users />} />
          <Route path="orders" element={<Orders />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
