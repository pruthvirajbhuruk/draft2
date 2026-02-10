"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function PropertyCategories() {
  return (
    <section className="categories-section">
      <div className="container">

        {/* HEADER */}
        <motion.div
          className="categories-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >
          <span>EXPLORE COLLECTION</span>
          <h2>
            Browse By <span>Property Type</span>
          </h2>
          <p>
            Discover curated properties crafted for lifestyle, luxury and smart investment.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="categories-grid">

          <CategoryCard
            title="Luxury Villas"
            img="https://images.unsplash.com/photo-1600607687644-c94bf27f37db"
            large
          />

          <CategoryCard
            title="Apartments"
            img="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          />

          <CategoryCard
            title="New Launches"
            img="https://images.unsplash.com/photo-1507089947368-19c1da9775ae"
          />

          <CategoryCard
            title="Commercial"
            img="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
          />

          <CategoryCard
            title="Investment Deals"
            img="https://images.unsplash.com/photo-1560518883-ce09059eeffa"
          />

        </div>
      </div>
    </section>
  );
}

function CategoryCard({ title, img, large=false }) {
  return (
    <motion.div
      className={`category-card ${large ? "large" : ""}`}
      whileHover={{ y: -10 }}
      transition={{ duration: .4 }}
    >
      <img src={img} />

      <div className="category-overlay" />

      <div className="category-content">
        <h3>{title}</h3>
        <button>
          Explore <ArrowRight size={18}/>
        </button>
      </div>
    </motion.div>
  );
}
