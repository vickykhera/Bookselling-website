import React from 'react';
import Rating from './Rating';
import { Link } from 'react-router-dom';
import book1 from '../assets/images/book1.jpeg';
import book2 from '../assets/images/book2.jpeg';
import book3 from '../assets/images/book3.jpeg';
import book4 from '../assets/images/book4.jpeg';
import book5 from '../assets/images/book5.jpeg';

const bookImages = {
  book1,
  book2,
  book3,
  book4,
  book5,
};

const BookCard = ({ book, addToCart }) => {
  return (
    <div className="book-card">
      <Link to={`/book/${book.id}`}>
      <img src={bookImages[book.image]} alt={book.title} />
        <h2>{book.title}</h2>
        <Rating rating={book.rating} />
      </Link>
      <p>${book.price}</p>
      <button onClick={() => addToCart(book)}>Add to Cart</button>
    </div>
  );
};

export default BookCard;
