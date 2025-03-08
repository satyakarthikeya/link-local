// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

function Home() {
  // Sample data for Special Deals (can be expanded)
  const specialDeals = [
    { name: 'Bread', price: '$2.50', business: 'Local Bakery', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2' },
    { name: 'Laptop', price: '$800', business: 'Tech Haven', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853' },
  ];

  // Categories list
  const categories = ['Food', 'Clothing', 'Electronics', 'Home', 'Services'];

  return (
    <div className="home">
      {/* Navigation Bar */}
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
            <Link to="/login" className="btn">Login</Link>
          </div>
        </div>
      </nav>

      {/* Logo Section */}
      <section className="logo-section">
        <div className="container">
          <h1 className="logo">Link Local</h1>
        </div>
      </section>

      {/* Special Deals Section */}
      <section className="special-deals">
        <div className="container">
          <h2>Special Deals</h2>
          <div className="product-grid">
            {specialDeals.map((item, index) => (
              <ProductCard key={index} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories">
        <div className="container">
          <h2>Categories</h2>
          <div className="category-buttons">
            {categories.map((category, index) => (
              <button key={index} className="category-btn">{category}</button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;