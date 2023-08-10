import React from 'react';
import Movie from '../component/Movie';
import '../Styles/movie.css';

function Home() {
  return (
    <div className="home-container">
      <Movie
        title="RRR "
        imageSrc="https://i.ytimg.com/vi/lDVQojLPI4Y/maxresdefault.jpg"
        date="10 Jan 2020"
        duration="14min"
        views="200"
        publisher="Rajamouli"
        publisherImageSrc=""
      />
      {/* Add more Movie components here */}
    </div>
  );
}

export default Home;
