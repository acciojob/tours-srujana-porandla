import React from 'react';
import Tour from './Tour';

const Tours = ({ tours, handleDelete }) => {
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map(tour => (
          <Tour key={tour.id} {...tour} removeTour={handleDelete} />
        ))}
      </div>
    </section>
  );
};

export default Tours;
