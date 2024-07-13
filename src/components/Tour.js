import React, { useState } from 'react';

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p id={`tour-item-para-${id}`}>
          {readMore ? info : `${info.substring(0, 200)}`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'shows' : 'hides'}
          </button>
        </p>
        <button id={`delete-btn-${id}`} class="delete-btn" onClick={() => handleDelete(id)}>Delete</button>

      </footer>
    </article>
  );
};

export default Tour;
