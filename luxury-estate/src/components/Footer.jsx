import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";

export default function Footer(){
  return(
    <footer className="footer">

      <div className="container-container footer-grid">

        {/* BRAND COLUMN */}
        <div className="footer-brand">
          <h2>Matrubhumi Real Estates</h2>
          <p>
            Curating premium real estate experiences for buyers,
            sellers and investors across India’s most desirable locations.
          </p>

          <div className="socials">
            <Instagram size={18}/>
            <Facebook size={18}/>
            <Linkedin size={18}/>
          </div>
        </div>

        {/* PROPERTIES */}
        <div className="footer-col">
          <h4>Properties</h4>
          <a>Luxury Villas</a>
          <a>Apartments</a>
          <a>New Launches</a>
          <a>Commercial</a>
          <a>Sell Property</a>
        </div>

        {/* COMPANY */}
        <div className="footer-col">
          <h4>Company</h4>
          <a>About Us</a>
          <a>Our Services</a>
          <a>Testimonials</a>
          <a>Contact</a>
          <a>Careers</a>
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <h4>Contact</h4>

          <div className="contact-item">
            <MapPin size={16}/>
            <span>Pune • Mumbai •</span>
          </div>

          <div className="contact-item">
            <Phone size={16}/>
            <span>+91 98765 xxxxx</span>
          </div>

          <div className="contact-item">
            <Mail size={16}/>
            <span>hello@matrubhumirealestate.com</span>
          </div>
        </div>

      </div>

      {/* NEWSLETTER */}
      <div className="newsletter">
        <div className="container-container newsletter-inner">
          <div>
            <h3>Get Exclusive Property Deals</h3>
            <p>Be the first to access off-market listings.</p>
          </div>

          <div className="newsletter-form">
            <input placeholder="Enter your email"/>
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        © 2026 Matrubhumi Real Estates • All Rights Reserved
      </div>

    </footer>
  )
}
