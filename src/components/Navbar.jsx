// src/components/Navbar.jsx
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

function Navbar() {
  const { user, logout } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="container">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
        <div className="search-section">
          <select className="location-dropdown">
            <option>Select Location</option>
            <option>Nearby</option>
            <option>Downtown</option>
          </select>
          <input type="text" placeholder="Search your local area..." className="search-bar" />
          {user ? (
            <div className="user-actions">
              {user.role === 'vendor' && <Link to="/myshop" className="btn">My Shop</Link>}
              <Link to="/cart" className="cart-icon">🛒 (0)</Link>
              <button onClick={handleLogout} className="btn">Logout</button>
            </div>
          ) : (
            <Link to="/login" className="btn">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;