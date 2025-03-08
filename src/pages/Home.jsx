// src/pages/Home.jsx
import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';

function Home() {
  // Sample data for Special Deals with more items
  const specialDeals = [
    { name: 'Fresh Bread', price: '$2.50', business: 'Local Bakery', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2' },
    { name: 'Ultrabook Pro', price: '$800', business: 'Tech Haven', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853' },
    { name: 'Organic Coffee', price: '$12.99', business: 'Bean Dreams', image: 'https://images.unsplash.com/photo-1524350876685-274059332603' },
    { name: 'Handmade Soap', price: '$6.99', business: 'Craft Corner', image: 'https://images.unsplash.com/photo-1607006483222-f662abe8dbf4' },
  ];

  // Categories with icons
  const categories = [
    { name: 'Food', icon: '🍕' },
    { name: 'Clothing', icon: '👕' },
    { name: 'Electronics', icon: '💻' },
    { name: 'Home', icon: '🏠' },
    { name: 'Services', icon: '🔧' },
    { name: 'Crafts', icon: '🧶' }
  ];
  
  // Featured shop section
  const featuredShops = [
    { name: 'Local Bakery', type: 'Food & Beverage', rating: '4.8', image: 'https://images.unsplash.com/photo-1556742393-d75f468bfcb0' },
    { name: 'Tech Haven', type: 'Electronics', rating: '4.6', image: 'https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec' },
    { name: 'Green Thumb', type: 'Plants & Home', rating: '4.9', image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411' },
  ];
  
  // Search functionality state
  const [searchTerm, setSearchTerm] = useState('');
  
  return (
    <div className="home fade-in">
      {/* Hero Section */}
      <section className="hero" style={{ 
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1559925393-8be0ec4767c8)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        padding: '6rem 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 className="logo" style={{ fontSize: '4rem', marginBottom: '1rem' }}>Link Local</h1>
          <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Support local businesses in your community</p>
          
          <div className="search-container" style={{ 
            maxWidth: '600px', 
            margin: '0 auto',
            display: 'flex',
            gap: '0.5rem'
          }}>
            <input 
              type="text" 
              placeholder="What are you looking for today?" 
              className="search-bar" 
              style={{ flex: '1' }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn btn-primary">Search</button>
          </div>
        </div>
      </section>

      {/* Categories Section - Moved up for better flow */}
      <section className="categories" style={{ padding: '4rem 0' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2rem' }}>Browse Categories</h2>
          <div className="category-buttons">
            {categories.map((category, index) => (
              <button key={index} className="category-btn" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '2rem' }}>{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Special Deals Section */}
      <section className="special-deals" style={{ padding: '4rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <h2>Today's Special Deals</h2>
            <Link to="/consumer" className="btn">View All</Link>
          </div>
          <div className="product-grid">
            {specialDeals.map((item, index) => (
              <ProductCard key={index} {...item} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Shops Section - New */}
      <section style={{ 
        background: '#f0f8ff', 
        padding: '4rem 0'
      }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Featured Local Shops</h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem' 
          }}>
            {featuredShops.map((shop, index) => (
              <div key={index} className="card" style={{ overflow: 'hidden' }}>
                <img 
                  src={shop.image} 
                  alt={shop.name} 
                  style={{ 
                    width: '100%', 
                    height: '180px', 
                    objectFit: 'cover',
                    borderRadius: '12px 12px 0 0'
                  }}
                />
                <div style={{ padding: '1.5rem' }}>
                  <h3>{shop.name}</h3>
                  <p>{shop.type} • ⭐ {shop.rating}</p>
                  <button className="btn btn-primary" style={{ marginTop: '1rem' }}>Visit Shop</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action for Vendors - New */}
      <section style={{ 
        background: 'linear-gradient(135deg, #6a0dad, #9b59b6)', 
        color: 'white',
        padding: '5rem 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h2 style={{ marginBottom: '1.5rem', fontSize: '2.5rem' }}>Own a Local Business?</h2>
          <p style={{ marginBottom: '2rem', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
            Join our platform and connect with customers in your local area. 
            Set up your shop in minutes and start growing your business today!
          </p>
          <Link to="/login" className="btn" style={{ 
            background: 'white', 
            color: '#6a0dad',
            padding: '1rem 2rem',
            fontSize: '1.1rem',
            fontWeight: 'bold'
          }}>
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;