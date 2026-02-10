"use client";
import { motion } from "framer-motion";
import { MapPin, BedDouble, Bath, Maximize } from "lucide-react";

export default function FeaturedProperties() {
  return (
    <section className="featured dark">

      <div className="container">

        {/* HEADER */}
        <div className="featured-header">
          <div className="featured-header-text">
            <span>EXCLUSIVE LISTINGS</span>
            <h2>Featured Luxury Properties</h2>
            <p>
              Discover handpicked premium homes in the most desirable locations.
            </p>
          </div>
          <div className="featured-header-cta">
          <button className="btn-primary large">
            View All Properties →
          </button>
          </div>
        </div>

        {/* FILTER TABS */}
        <div className="filters">
          <Filter text="All" active />
          <Filter text="Villas" />
          <Filter text="Apartments" />
          <Filter text="New Launch" />
          <Filter text="Commercial" />
        </div>

        {/* GRID */}
        <div className="property-grid">
          <PropertyCard img="https://images.unsplash.com/photo-1600585154340-be6161a56a0c" price="₹3.9 Cr"/>
          <PropertyCard img="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c" price="₹2.4 Cr"/>
          <PropertyCard img="https://images.unsplash.com/photo-1600607687644-c94bf27f37db" price="₹5.2 Cr"/>
        </div>

      </div>
    </section>
  );
}

/* FILTER BUTTON */
function Filter({ text, active=false }) {
  return (
    <button className={`filter-pill ${active ? "active" : ""}`}>
      {text}
    </button>
  );
}

/* PROPERTY CARD */
function PropertyCard({ img, price }) {
  return (
    <motion.div
      className="property-card"
      whileHover={{ y: -12 }}
      transition={{ duration: 0.4 }}
    >
      {/* IMAGE */}
      <div className="property-image">
        <img src={img} />

        <div className="image-overlay"/>

        <div className="tag">New Launch</div>
        <div className="price">{price}</div>
      </div>

      {/* DETAILS */}
      <div className="property-info">
        <h3>Luxury Sky Villa</h3>

        <p className="location">
          <MapPin size={16}/> Baner, Pune
        </p>

        <div className="features">
          <span><BedDouble size={18}/>4 Beds</span>
          <span><Bath size={18}/>3 Baths</span>
          <span><Maximize size={18}/>3200 sqft</span>
        </div>
      </div>
    </motion.div>
  );
}
