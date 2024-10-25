import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import BookCard from './components/BookCard';
import Profile from './components/Profile';
import Cart from './components/Cart';
import BookDetails from './components/BookDetails'; // Import BookDetails component
import Rating from './components/Rating';

const App = () => {
  const [cart, setCart] = useState([]);
  const [profileVisible, setProfileVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const books = [
    { id: 1, title: 'Book 1', price: 10, image: 'book1', category: 'Fiction', description: 'Description of Book 1' ,rating:4},
    { id: 2, title: 'Book 2', price: 15, image: 'book2', category: 'Science', description: 'Description of Book 2' ,rating:5},
    { id: 3, title: 'Book 3', price: 20, image: 'book3', category: 'History', description: 'Description of Book 3' ,rating:3},
    { id: 4, title: 'Book 4', price: 12, image: 'book4', category: 'Fiction', description: 'Description of Book 4' ,rating:4},
    { id: 5, title: 'Book 5', price: 18, image: 'book5', category: 'Science', description: 'Description of Book 5' ,rating:3},
  ];

  const addToCart = (book) => {
    setCart([...cart, book]);
  };

  const toggleProfile = () => {
    setProfileVisible(!profileVisible);
  };

  const filteredBooks = books.filter((book) => {
    const matchesCategory = selectedCategory === 'All' || book.category === selectedCategory;
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Router>
      <Navbar
        toggleProfile={toggleProfile}
        cartCount={cart.length}
        setSearchTerm={setSearchTerm}
        setSelectedCategory={setSelectedCategory}
      />
      {profileVisible && <Profile />}
      <Routes>
        <Route 
          path="/" 
          element={
            <div className="book-container">
              {filteredBooks.length > 0 ? (
                filteredBooks.map((book) => (
                  <BookCard key={book.id} book={book} addToCart={addToCart} />
                ))
              ) : (
                <p>No books found.</p>
              )}
            </div>
          } 
        />
        <Route 
          path="/book/:id" 
          element={<BookDetails books={books} />} 
        />
      </Routes>
      <Cart cart={cart} />
    </Router>
  );
};

export default App;
