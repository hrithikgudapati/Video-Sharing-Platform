import React from 'react';
import '../Styles/movie.css';
import User from'../Assets/OIP.jpeg'
function Movie(props) {

  // 
  return (
    <div className="movie">
      <div className="banner-container">
        <img src="https://th.bing.com/th/id/R.53c44f1678a76356864044079733f75b?rik=83xeZP3sf451NA&riu=http%3a%2f%2f1.bp.blogspot.com%2f-z-vQTRs9ZjY%2fU3W9DIzKStI%2fAAAAAAAABsI%2f-ymETvfFq04%2fs1600%2fgodzilla%2bposter.jpeg&ehk=99O52HclYU%2fx2f2j%2b%2fQVYH8UInVM7wnhR%2fqe0bd%2f2h4%3d&risl=&pid=ImgRaw&r=0" alt="movie-banner" />
      </div>
      <div className="info">
        <h3>Godzilla Attack in the city</h3>
        <div className="movie-info">
          <span id="date">10 Jan 2020</span>
          <span id="duration">14 Mins</span>
          <span id="views">200 Views</span>
        </div>
        <div className='publisher-info'>
          <div id="image-container"><img src={User} alt="publisher" /></div>
          <h3>Publisher Name</h3>
        </div>
      </div>
    </div>
  );
}

export default Movie;
