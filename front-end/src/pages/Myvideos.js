import React from 'react'
import '../Styles/myvideos.css'
import picture from '../Assets/kgf2-1024x576.jpg'
import VideoItem from '../component/VideoItem'
const Myvideos = () => {
    return (
        <div>
            <section>
                <div id="left-side">
                    <div className="top">
                        <span>My Videos</span>
                        <select>
                            <option value="Recent">Recent</option>
                            <option value="Most Watched">Most Watched</option>
                            <option value="Latest">Latest</option>
                        </select>
                    </div>
                    <div className="bottom">
                        <VideoItem />
                        <VideoItem />
                        <VideoItem />
                        <VideoItem />
                        <VideoItem />
                        <VideoItem />
                    </div>
                </div>
                <div id="right-side">
                    <div id='banner'>
                        <img src={picture} alt="" />
                    </div>
                    <div className="details">
                        <div className="first-row">
                            <h3>Godzilla Attack in the city</h3>
                            <div id="movie-details">
                                <span id="date">10 Jan 2020</span>
                                <span id="duration">14 Mins</span>
                                <span id="views">200 Views</span>
                            </div>
                        </div>
                        <div className="second-row">
                            <h3>Description</h3>
                            <div className="text-box">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam blanditiis expedita tenetur quam commodi fugit. Unde, recusandae voluptatum quas odit commodi fuga voluptate velit aliquam, in, voluptatem laudantium blanditiis quis.</p>
                            </div>
                        </div>
                        <div className="third-row">
                            <div className="category">
                                <h3>Category</h3>
                                <select>
                                    <option value="Action">Action</option>
                                    <option value="Thriller">Thriller</option>
                                    <option value="Fantacy">Fantacy</option>
                                    <option value="Comedy">Comedy</option>
                                </select>
                            </div>
                            <div className="visibility">
                                <h3>Visibility</h3>
                                <select>
                                    <option value="Public">Public</option>
                                    <option value="Private">Private</option>
                                </select>
                            </div>
                        </div>
                        <div className="fourth-row">
                            <button id='delete'>Delete</button>
                            <button id='save'>Save</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Myvideos
