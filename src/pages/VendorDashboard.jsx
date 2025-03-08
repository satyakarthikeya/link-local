// src/pages/VendorDashboard.jsx
function VendorDashboard() {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="sidebar-logo">Link Local</div>
        <ul>
          <li><a href="#overview">Overview</a></li>
          <li><a href="/myshop">My Shop</a></li>
          <li><a href="#orders">Orders</a></li>
        </ul>
      </aside>
      <main className="main-panel container fade-in">
        <h1>Vendor Dashboard</h1>
        <section id="overview">
          <h2>Overview</h2>
          <div className="stats">
            <div className="card">Businesses: 1</div>
            <div className="card">Orders: 5</div>
            <div className="card">Sales: $500</div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default VendorDashboard;