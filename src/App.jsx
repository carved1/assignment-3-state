import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import CartPage from './pages/CartPage'
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

function loadCart() {
  const savedCart = localStorage.getItem('cart')
  if (!savedCart) {
    return []
  }

  try {
    const parsedCart = JSON.parse(savedCart)
    return Array.isArray(parsedCart) ? parsedCart : []
  } catch {
    return []
  }
}

function App() {
  const [cart, setCart] = useState(loadCart)

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  function addToCart(product) {
    console.log("Added to cart:", product);
    setCart([...cart, product]);
  }

  function removeFromCart(indexToRemove) {
    setCart(cart.filter((_, index) => index !== indexToRemove));
  }

  return (
    <BrowserRouter>
      <Header storeName="ComponentCorner" cartCount={cart.length} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/products"
          element={<ProductsPage products={products} addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={<CartPage cart={cart} removeFromCart={removeFromCart} />}
        />
      </Routes>
      <Footer
        storeName="ComponentCorner"
        email="hello@componentcorner.com"
        phone="(555) 123-4567"
        address="123 Record Street, New York, NY"
      />
    </BrowserRouter>
  )
}

export default App
