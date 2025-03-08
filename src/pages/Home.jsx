// src/pages/Home.jsx
import ProductCard from '../components/ProductCard';

function Home() {
  // Sample data for Special Deals
  const specialDeals = [
    { name: 'Bread', price: '$2.50', business: 'Local Bakery', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2' },
    { name: 'Laptop', price: '$800', business: 'Tech Haven', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853' },
  ];

  // Categories list (not shown in the screenshot but keeping for completeness)
  const categories = ['Food', 'Clothing', 'Electronics', 'Home', 'Services'];

  return (
    <div className="home">
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