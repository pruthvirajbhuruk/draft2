import { motion } from "framer-motion";


export default function Header(){
return(
<motion.header initial={{y:-80,opacity:0}} animate={{y:0,opacity:1}} className="container" style={{display:'flex',justifyContent:'space-between'}}>
<h1 className="gold" style={{fontFamily:'Playfair Display'}}>Matrubhumi</h1>
<nav style={{display:'flex',gap:30}}>
<a>Properties</a>
<a>Sell</a>
<a>About</a>
<a className="btn">Contact</a>
</nav>
</motion.header>
)
}