// src/components/ProductCard.jsx
function ProductCard({ name, price, business, image, isVendor = false }) {
  return (
    <div className="product-card card">
      <img src={image} alt={name} className="product-image" />
      <div className="product-details">
        <h3>{name}</h3>
        <p>{price} • {business}</p>
        {isVendor ? (
          <div className="vendor-actions">
            <button className="btn btn-secondary">Edit</button>
            <button className="btn btn-danger">Delete</button>
          </div>
        ) : (
          <button className="btn btn-primary">Add to Cart</button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;