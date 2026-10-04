import ProductCard from '../components/ProductCard'

function ProductsPage({ products, addToCart }) {
  return (
    <main className="products" id="shop">
      <h2>Featured Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={addToCart}
          />
        ))}
      </div>
    </main>
  )
}

export default ProductsPage
