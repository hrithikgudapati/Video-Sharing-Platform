import React from 'react'
import '../Styles/videoitem.css'
import picture from'../Assets/kgf2-1024x576.jpg'
import playButton from'../Assets/play-button.png'
import User from'../Assets/OIP.jpeg'
const VideoItem = () => {
  return (
    <div>
      
      <div id="Item-container">
        <img id="thumbnail"src={picture} alt="thumbanail" />
        <div id='play'><img  src={playButton}alt="playbutton" /></div>
        <div id='profile'><img src={User} alt="" /></div>
        <div id="title"><h3>Interview Support Suggestion 1</h3></div>
        <div id="details">
            <span id="date">10 Jan 2020</span>
            <span id="duration">14 Mins</span>
            <span id="views">200 Views</span>
        </div>
      </div>
      
      
    </div>
  )
}

export default VideoItem
