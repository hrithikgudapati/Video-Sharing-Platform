import React from 'react';
import '../Styles/home.css'
import VideoItem from '../component/VideoItem';
import Movie from '../component/Movie';
import '../Styles/movie.css';
import Navbar from '../component/Navbar';
function Home() {
  return (
    <div className="home-container">
      <Navbar/>
      <Movie/>
      <div id='item-list'>
        <div id='top'>
          <span>Recent</span>
          <span>View All</span>
        </div>
        <VideoItem/>
        <VideoItem/>
        <VideoItem/>
        <VideoItem/>
      </div>
    </div>
  );
}

export default Home;
