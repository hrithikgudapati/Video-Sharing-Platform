import React from 'react';

import Movie from '../component/Movie'; // Import your Movie component
import '../Styles/movie.css'; // Import your home page styling

function Home() {
  return (
    <div>
     
      <div className="home-container">
        <Movie title="" imageSrc="https://i.ytimg.com/vi/lDVQojLPI4Y/maxresdefault.jpg" />
       
        {/* Add more Movie components here */}
      </div>
    </div>
  );
}

export default Home;
