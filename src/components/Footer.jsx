import './Footer.css'

function Footer({ storeName, email, phone, address }) {
  return (
    <footer className="footer" id="contact">
      <div>
        <h3>About</h3>
        <p>{storeName} is an online store for vinyl records.</p>
      </div>
      <div id="about">
        <h3>Contact</h3>
        <p>{email}</p>
        <p>{phone}</p>
      </div>
      <div>
        <h3>Location</h3>
        <p>{address}</p>
      </div>
    </footer>
  )
}

export default Footer
