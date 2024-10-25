import React from 'react';
import { useParams } from 'react-router-dom';

const BookDetails = ({ books }) => {
  const { id } = useParams(); // Get the book ID from the URL
  const book = books.find((b) => b.id === parseInt(id)); // Find the book by ID

  return (
    <div className="book-details">
      {book ? (
        <>
          <img src={process.env.PUBLIC_URL + `/images/${book.image}`} alt={book.title} />
          <h2>{book.title}</h2>
          <p>Price: ${book.price}</p>
          <p>Category: {book.category}</p>
          <p>Description: {book.description || 'No description available.'}</p>
          <button>Add to Cart</button> {/* You can add functionality to add to cart here */}
        </>
      ) : (
        <p>Book not found.</p>
      )}
    </div>
  );
};

export default BookDetails;
