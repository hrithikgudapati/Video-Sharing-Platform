import React from 'react';
import Movie from '../component/Movie';
import '../Styles/movie.css';
import Navbar from '../component/Navbar';
function Home() {
  return (
    <div className="home-container">
      <Navbar/>
      <Movie/>
      
    </div>
  );
}

export default Home;
