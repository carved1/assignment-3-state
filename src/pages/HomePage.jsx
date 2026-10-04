import Hero from '../components/Hero'
import './HomePage.css'

function HomePage() {
  return (
    <main>
      <Hero
        title="Welcome to ComponentCorner"
        subtitle="Shop vinyl records for your collection."
        ctaText="Shop Now"
      />
      {/* Why Shop with Us section written and styled with generative AI */}
      <section className="why-shop">
        <h2>Why Shop with Us?</h2>
        <p className="why-shop-lead">
          ComponentCorner is a small shop for music lovers who want a simple way to find their next record.
        </p>
        <div className="why-shop-grid">
          <article>
            <h3>Records Worth Keeping</h3>
            <p>Each title is chosen for sound quality and the stories behind the music, not just what is trending.</p>
          </article>
          <article>
            <h3>Easy to Browse</h3>
            <p>Look through the catalog, add a record to your cart, and come back later. Your cart stays saved in this browser.</p>
          </article>
          <article>
            <h3>Help from Real People</h3>
            <p>Questions about an order or a pressing? Email or call the shop and a person will get back to you.</p>
          </article>
        </div>
      </section>
    </main>
  )
}

export default HomePage
