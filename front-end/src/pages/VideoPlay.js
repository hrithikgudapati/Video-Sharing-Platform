import React from 'react'
import '../Styles/videoplay.css'
import VideoItem from '../component/VideoItem'
import video from '../Assets/24843548.mp4'
import User from '../Assets/OIP.jpeg'
const VideoPlay = () => {
    return (
        <div id='conatainer'>
            <div className="left">
                <video controls  >
                    <source src={video} type='video/mp4' />
                </video>
                <div id='video-footer'>
                    <div id="left">
                        <div className="profile"><img src={User} alt="Publisher" /></div>
                        <div id='title'><h3>Interview Support Suggestion 7</h3></div>
                    </div>
                    <div id="right">
                        <span id="date">10 Jan 2020</span>
                        <span id="duration">14 Mins</span>
                        <span id="views">200 Views</span>
                    </div>
                </div>
            </div>
            <div className="right">
            <VideoItem/>
            <VideoItem/>
            <VideoItem/>
            </div>
        </div>
    )
}

export default VideoPlay
