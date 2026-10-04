import CartItem from '../components/CartItem'

function CartPage({ cart, removeFromCart }) {
  const cartTotal = cart.reduce((total, item) => total + item.price, 0)

  return (
    <main className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p className="cart-empty">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-list">
            {cart.map((item, index) => (
              <CartItem
                key={`${item.id}-${index}`}
                item={item}
                onRemove={() => removeFromCart(index)}
              />
            ))}
          </div>
          <p className="cart-total">Total: ${cartTotal.toFixed(2)}</p>
        </>
      )}
    </main>
  )
}

export default CartPage
