import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar(){
  const [open,setOpen] = useState(false);
  const [scrolled,setScrolled] = useState(false);

  useEffect(()=>{
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll",handleScroll);
    return () => window.removeEventListener("scroll",handleScroll);
  },[]);

  return(
    <>
      {/* NAVBAR */}
      <motion.header
        initial={{y:-80,opacity:0}}
        animate={{y:0,opacity:1}}
        className={`navbar ${scrolled ? "scrolled" : ""}`}
      >
        <div className="container nav-inner">

          <h2 className="logo">MATRUBHUMI</h2>

          {/* DESKTOP LINKS */}
          <div className="nav-links">
            <a>Buy</a>
            <a>Sell</a>
            <a>Projects</a>
            <button className="btn-primary">Contact</button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="mobile-menu-btn" onClick={()=>setOpen(true)}>
            <Menu size={28}/>
          </div>

        </div>
      </motion.header>

      {/* FULLSCREEN MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            className="mobile-menu"
          >
            <div className="mobile-menu-header">
              <h2 className="logo">LUXE ESTATES</h2>
              <X size={32} onClick={()=>setOpen(false)} />
            </div>

            <div className="mobile-menu-links">
              <a onClick={()=>setOpen(false)}>Buy</a>
              <a onClick={()=>setOpen(false)}>Sell</a>
              <a onClick={()=>setOpen(false)}>Projects</a>
              <button className="btn-primary">Contact</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
