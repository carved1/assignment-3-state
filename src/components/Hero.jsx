import { Link } from 'react-router-dom'
import './Hero.css'

function Hero({ title, subtitle, ctaText }) {
  return (
    <section className="hero">
      <img
        src="https://placehold.co/1200x400/667eea/ffffff?text=Shop+Vinyl"
        alt="ComponentCorner banner"
      />
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <Link to="/products">{ctaText}</Link>
    </section>
  )
}

export default Hero
