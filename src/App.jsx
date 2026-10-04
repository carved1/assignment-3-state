import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ProductCard from './components/ProductCard'
import CartItem from './components/CartItem'
import Footer from './components/Footer'
import './App.css'

const products = [
  { 
    id: 1, 
    name: "Wireless Headphones", 
    price: 99.99, 
    image: "https://placehold.co/600x400",
    description: "Premium noise-cancelling headphones with 30-hour battery life"
  },
  { 
    id: 2, 
    name: "Smart Watch", 
    price: 249.99, 
    image: "https://placehold.co/600x400",
    description: "Fitness tracker with heart rate monitor and GPS"
  },
  { 
    id: 3, 
    name: "Bluetooth Speaker", 
    price: 79.99, 
    image: "https://placehold.co/600x400",
    description: "Portable waterproof speaker with 360-degree sound"
  },
  { 
    id: 4, 
    name: "Laptop Stand", 
    price: 49.99, 
    image: "https://placehold.co/600x400",
    description: "Ergonomic aluminum stand for laptops and tablets"
  },
  { 
    id: 5, 
    name: "Webcam", 
    price: 129.99, 
    image: "https://placehold.co/600x400",
    description: "4K webcam with auto-focus and noise reduction"
  },
  { 
    id: 6, 
    name: "Mechanical Keyboard", 
    price: 159.99, 
    image: "https://placehold.co/600x400",
    description: "RGB backlit keyboard with custom switches"
  }
];

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    console.log("Added to cart:", product);
    setCart([...cart, product]);
  }

  function removeFromCart(indexToRemove) {
    setCart(cart.filter((_, index) => index !== indexToRemove));
  }

  const cartTotal = cart.reduce((total, item) => total + item.price, 0);

  return (
    <>
      <Header storeName="ComponentCorner" cartCount={cart.length} />
      <Hero
        title="Welcome to ComponentCorner"
        subtitle="Shop vinyl records for your collection."
        ctaText="Shop Now"
      />
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

        <section className="cart">
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
        </section>
      </main>
      <Footer
        storeName="ComponentCorner"
        email="hello@componentcorner.com"
        phone="(555) 123-4567"
        address="123 Record Street, New York, NY"
      />
    </>
  )
}

export default App
