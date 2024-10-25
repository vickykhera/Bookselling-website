import React from 'react';

const Rating = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => {
    return index < rating ? '★' : '☆';
  });

  return <div className="rating">{stars.join(' ')}</div>;
};

export default Rating;
