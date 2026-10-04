import './Header.css'

function Header({ storeName, cartCount }) {
  return (
    <header className="header">
      <h1>{storeName}</h1>
      <div className="header-actions">
        <nav>
          <a href="#shop">Shop</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="cart-container">
          <span className="cart-icon">🛒</span>
          <span className="cart-count">{cartCount}</span>
        </div>
      </div>
    </header>
  )
}

export default Header
