import React from 'react';
import '../Styles/movie.css';

function Movie(props) {
  const { title, imageSrc, date, duration, views, publisher, publisherImageSrc } = props;

  const backgroundImageStyle = {
    backgroundImage: `url(${imageSrc})`,
  };

  return (
    <div className="movie">
      <img src={imageSrc} alt={title} />
      <div className="movie-overlay">
        <div className="movie-details">
          <h4 className="movie-title">{title}</h4>
          <p className="movie-subtitle">{date} • {duration} • {views} views</p>
        </div>
        <div className="publisher-info">
          <img src={publisherImageSrc} alt={publisher} className="publisher-avatar" />
          <p className="publisher-name">{publisher}</p>
        </div>
      </div>
    </div>
  );
}

export default Movie;
