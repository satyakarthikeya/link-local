// src/components/ProductCard.jsx
function ProductCard({ name, price, business, image, isVendor = false }) {
    return (
      <div className="product-card card">
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>{price} • {business}</p>
        {isVendor ? (
          <div className="vendor-actions">
            <button className="btn">Edit</button>
            <button className="btn">Delete</button>
          </div>
        ) : (
          <button className="btn">Add to Cart</button>
        )}
      </div>
    );
  }
  
  export default ProductCard;