"use client";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Rahul Mehta",
    role: "Penthouse Seller",
    text: "Sold our penthouse in just 6 days. Their marketing and buyer network is unmatched.",
    img: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Sneha Kapoor",
    role: "Luxury Home Buyer",
    text: "They helped us find our dream home in Pune. The experience felt truly premium.",
    img: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Amit Desai",
    role: "Investor",
    text: "Professional, transparent and extremely knowledgeable. Highly recommended.",
    img: "https://randomuser.me/api/portraits/men/65.jpg"
  }
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">

        <div className="testimonial-header">
          <span>CLIENT STORIES</span>
          <h2>Trusted By Homeowners & Investors</h2>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((t, i) => (
            <motion.div 
              className="testimonial-card"
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="quote">“</div>

              <p className="testimonial-text">{t.text}</p>

              <div className="client">
                <img src={t.img} />
                <div>
                  <h4>{t.name}</h4>
                  <span>{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
