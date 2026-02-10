import { Search } from "lucide-react";

export default function SearchBar(){
  return(
    <div className="searchbar">

      <div className="search-item">
        <label>City</label>
        <select>
          <option>Pune</option>
          <option>Mumbai</option>
          <option>Bangalore</option>
        </select>
      </div>

      <div className="search-item">
        <label>Property Type</label>
        <select>
          <option>Apartment</option>
          <option>Villa</option>
          <option>Commercial</option>
        </select>
      </div>

      <div className="search-item">
        <label>Budget</label>
        <select>
          <option>₹50L - ₹1Cr</option>
          <option>₹1Cr - ₹2Cr</option>
          <option>₹2Cr+</option>
        </select>
      </div>

      <button className="search-btn">
        <Search size={18}/> Search
      </button>

    </div>
  )
}
