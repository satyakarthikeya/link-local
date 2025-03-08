// src/pages/ConsumerShop.jsx
import ProductCard from '../components/ProductCard';

function ConsumerShop() {
  const products = [
    { name: 'Bread', price: '$2.50', business: 'Local Bakery', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2' },
    { name: 'Laptop', price: '$800', business: 'Tech Haven', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853' },
    { name: 'Shirt', price: '$20', business: 'Style Shop', image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b' },
  ];

  return (
    <div className="consumer-shop">
      <section className="hero-section">
        <div className="container">
          <h1>Shop Local</h1>
        </div>
      </section>
      <main className="container fade-in">
        <section className="products">
          <h2>Browse Products</h2>
          <div className="product-grid">
            {products.map((item, index) => (
              <ProductCard key={index} {...item} />
            ))}
          </div>
        </section>
        <section className="order-history">
          <h2>Order History</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Business</th>
                <th>Total</th>
                <th>Status</th>
                <th>Review</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>101</td>
                <td>Local Bakery</td>
                <td>$10</td>
                <td>Delivered</td>
                <td><button className="btn btn-primary">Review</button></td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

export default ConsumerShop;