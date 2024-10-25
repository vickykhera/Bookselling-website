import React from 'react';

const Navbar = ({ toggleProfile, cartCount, setSearchTerm, setSelectedCategory }) => {
  return (
    <nav className="navbar">
      <h1>Book Store</h1>
      <div className="navbar-links">
        {/* Search Bar */}
        <input 
          type="text" 
          placeholder="Search books..." 
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
        
        {/* Category Dropdown */}
        <select onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="All">All Categories</option>
          <option value="Fiction">Fiction</option>
          <option value="Science">Science</option>
          <option value="History">History</option>
        </select>
        
        {/* Profile Button */}
        <button onClick={toggleProfile}>Profile</button>

        {/* Cart Count */}
        <div className="cart-icon">
          <span>Cart ({cartCount})</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
