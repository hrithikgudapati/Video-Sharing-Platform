import React from 'react';
import '../Styles/movie.css'; // Import your movie styling

function Movie(props) {
  const { title, imageSrc } = props;

  return (
    <div className="movie">
      <img src={imageSrc} alt={title} />
      <h4>{title}</h4>
    </div>
  );
}

export default Movie;
