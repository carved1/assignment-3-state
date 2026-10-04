import { Link } from 'react-router-dom'
import './Header.css'

function Header({ storeName, cartCount }) {
  return (
    <header className="header">
      <h1>{storeName}</h1>
      <div className="header-actions">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/products">Shop</Link>
        </nav>
        <Link to="/cart" className="cart-link" aria-label="View cart">
          <div className="cart-container">
            <span className="cart-icon">🛒</span>
            <span className="cart-count">{cartCount}</span>
          </div>
        </Link>
      </div>
    </header>
  )
}

export default Header
