// src/pages/MyShop.jsx
import ProductCard from '../components/ProductCard';

function MyShop() {
  const shopProducts = [
    { name: 'Bread', price: '$2.50', business: 'Local Bakery', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2' },
    { name: 'Cake', price: '$15', business: 'Local Bakery', image: 'https://images.unsplash.com/photo-1542834281-8d409d9e1f99' },
  ];

  return (
    <main className="container">
      <h1>My Shop</h1>
      <section className="shop-details">
        <h2>Shop Details</h2>
        <div className="card">
          <p><strong>Name:</strong> Local Bakery</p>
          <p><strong>Category:</strong> Food</p>
          <button className="btn">Edit Shop</button>
        </div>
      </section>
      <section className="shop-products">
        <h2>Manage Products</h2>
        <div className="product-grid">
          {shopProducts.map((item, index) => (
            <ProductCard key={index} {...item} isVendor={true} />
          ))}
        </div>
        <button className="btn">Add New Product</button>
      </section>
    </main>
  );
}

export default MyShop;