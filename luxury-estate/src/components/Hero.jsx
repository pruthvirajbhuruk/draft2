import { motion } from "framer-motion";
import SearchBar from "./SearchBar";

export default function Hero(){
  return(
    <section className="hero">
      <div className="container hero-wrap">

        {/* LEFT CONTENT */}
        <div className="hero-left">

          <motion.p 
            initial={{opacity:0,y:20}}
            animate={{opacity:1,y:0}}
            className="hero-tag"
          >
            INDIA'S MOST PREMIUM REAL ESTATE
          </motion.p>

          <motion.h1
            initial={{opacity:0,y:40}}
            animate={{opacity:1,y:0}}
            className="hero-title"
          >
            Discover Luxury Homes
            <br/>
            In <span className="gold">Prime Locations</span>
          </motion.h1>

          <p className="hero-sub">
            Buy, sell & invest in exclusive villas, apartments and commercial
            spaces curated for elite buyers and smart investors.
          </p>

          <SearchBar/>

          

        </div>

        {/* IMAGE */}
        <motion.div
          initial={{scale:.95,opacity:0}}
          animate={{scale:1,opacity:1}}
          className="hero-right"
        >
          <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"/>
        </motion.div>

      </div>
    </section>
  )
}
