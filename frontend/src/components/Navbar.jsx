import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-slate-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-cyan-400">
        AI Payment Gateway
      </h1>

      <div className="space-x-6">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
}

export default Navbar;