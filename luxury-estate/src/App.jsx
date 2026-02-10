import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import PropertyCategories from "./components/PropertyCategories";
import FeaturedProperties from "./components/FeaturedProperties";
import DeveloperTrust from "./components/DeveloperTrust";
import Testimonials from "./components/Testimonials";
import SellProperty from "./components/SellProperty";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";

export default function App() {
  return (
    <div className="page-wrapper">   {/* ⭐ IMPORTANT WRAPPER */}
      
        
      <main className="main-content">
        <Navbar />
        <Hero />
        <FeaturedProperties />
        
        <PropertyCategories />
        <Stats />
        <DeveloperTrust />
        <Testimonials />
        <SellProperty/>
        <Footer />
      </main>

  

    </div>
  );
}
