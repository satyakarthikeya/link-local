// src/pages/Home.jsx
import ProductCard from '../components/ProductCard';

function Home() {
  const featured = [
    { name: 'Bread', price: '$2.50', business: 'Local Bakery', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2' },
    { name: 'Laptop', price: '$800', business: 'Tech Haven', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853' },
    { name: 'Shirt', price: '$20', business: 'Style Shop', image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b' },
  ];

  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <h1>Connecting Local Commerce</h1>
          <p>Discover local vendors and grow your business.</p>
          <div className="search-bar">
            <input type="text" placeholder="Search products..." />
            <select><option>Category</option><option>Food</option></select>
            <button className="btn">Search</button>
          </div>
        </div>
      </section>
      <section className="featured">
        <div className="container">
          <h2>Featured Businesses</h2>
          <div className="product-grid">
            {featured.map((item, index) => (
              <ProductCard key={index} {...item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;