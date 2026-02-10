"use client";
import { motion } from "framer-motion";

const logos = [
  "/logos/lodha.svg",
  "/logos/godrej.svg",
  "/logos/prestige.svg",
  "/logos/dlf.svg",
  "/logos/brigade.svg",
  "/logos/oberio.svg",
  "/logos/shapoorji.svg",
  "/logos/tata.svg"
];

export default function DeveloperTrust() {
  return (
    <section className="developers">
      <div className="container">
        <div className="dev-header">
          <span>TRUSTED DEVELOPERS</span>
          <h2>Partnered With India’s Most Respected Builders</h2>
          <p>
            Access exclusive inventory from top tier developers and luxury projects
            across the country.
          </p>
        </div>

        <div className="dev-marquee-wrapper">
          <div className="fade-left" />
          <div className="fade-right" />

          <motion.div
            className="dev-marquee"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          >
            {[...logos, ...logos].map((logo, i) => (
              <div className="dev-logo-card" key={i}>
                <img src={logo} alt="developer logo" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
