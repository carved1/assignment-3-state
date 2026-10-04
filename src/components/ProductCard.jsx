import './ProductCard.css'

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p className="price">${product.price.toFixed(2)}</p>
      <p>{product.description}</p>
      <button type="button" className="add-to-cart" onClick={() => onAddToCart(product)}>
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard
