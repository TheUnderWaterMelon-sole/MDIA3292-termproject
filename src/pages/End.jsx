import React from "react";
import {Link} from "react-router-dom";
import endVideo from '../assets/8minutevideo.mp4';

// Styles
import '../css/styles.css';

function End() {
    return (
        <div className="end-container">
            <h1>Well done! Wanna give us one more minute??</h1>
            
            <div className="video-container">
                <video controls width="100%" height="auto">
                    <source src={endVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <br/>
        
            <div className="button-wrapper">
                <Link to="/">
                    <button className="home-btn">Go Home</button>
                </Link>
            </div>
        </div>
    );
}

export default End;
