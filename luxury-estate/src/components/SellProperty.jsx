import { motion } from "framer-motion";
import { Home, Sparkles, TrendingUp, ShieldCheck } from "lucide-react";

export default function SellProperty() {
  return (
    <section className="sell-lux-section">
      <div className="container">

        {/* MAIN GRID */}
        <div className="sell-lux-grid">

          {/* IMAGE SIDE */}
          <motion.div 
            initial={{opacity:0,x:-60}}
            whileInView={{opacity:1,x:0}}
            viewport={{once:true}}
            className="sell-image-wrap"
          >
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa"
              className="sell-image"
            />

            <div className="floating-value">
              <h3>₹900Cr+</h3>
              <p>Property Value Sold</p>
            </div>
          </motion.div>

          {/* TEXT SIDE */}
          <motion.div
            initial={{opacity:0,x:60}}
            whileInView={{opacity:1,x:0}}
            viewport={{once:true}}
          >
            <span className="eyebrow">SELL WITH CONFIDENCE</span>

            <h2 className="sell-title">
              Sell Faster. Sell Smarter.
              <span> Sell For More.</span>
            </h2>

            <p className="muted sell-desc">
              AI marketing + premium buyer network ensures your property
              gets maximum exposure and sells at the best price.
            </p>

            <div className="sell-features">
              <Feature icon={<Sparkles />} text="AI Generated Listings"/>
              <Feature icon={<TrendingUp />} text="Premium Buyer Network"/>
              <Feature icon={<ShieldCheck />} text="Verified Buyers Only"/>
              <Feature icon={<Home />} text="Pro Photography & Branding"/>
            </div>

            <button className="btn-primary sell-btn">
              List Your Property →
            </button>
          </motion.div>
        </div>

        {/* KPI STRIP (DARK VARIANT) */}
        <div className="seller-kpis">
          <KPI number="12 Days" text="Avg Selling Time"/>
          <KPI number="6,500+" text="Active Buyers"/>
          <KPI number="4.9★" text="Seller Rating"/>
          <KPI number="98%" text="Success Rate"/>
        </div>

        

      </div>
    </section>
  );
}

/* sub components */

function Feature({icon,text}){
  return(
    <div className="sell-feature">
      <div className="icon">{icon}</div>
      <span>{text}</span>
    </div>
  )
}

function KPI({number,text}){
  return(
    <div className="kpi">
      <h3>{number}</h3>
      <p>{text}</p>
    </div>
  )
}
