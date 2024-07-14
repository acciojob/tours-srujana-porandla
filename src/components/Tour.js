import React, { useState } from 'react';

const Tour = ({ id, name, info, image, price, handleDelete}) => {
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
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button  id={`see-more-${id}`} onClick={() => setReadMore(!readMore)}>
            {readMore ? 'Show less' : 'See more'}
          </button>
        </p>
        <button id={`delete-btn-${id}`} class="delete-btn" onClick={() => handleDelete(id)}>Not interested</button>

      </footer>
    </article>
  );
};

export default Tour;
