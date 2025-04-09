// Home.jsx

import React from "react";
import {Link} from "react-router-dom";
import homeImage from '../assets/home-image.jpg?url';

// Styles
import '../css/styles.css';

function Home() {
    return (


    <div>
        <h1>Hi there, How are you these days? </h1>
        <div className="image-container">
            <img src={homeImage} alt="chrocheted cute monster" />
        </div>
        <p>Pick the answer that is the most accurate, even if it's not the perfect anser</p>
        <Link to="/questions">
        <button className="primary-btn">Let's Begin</button>
      </Link>
    </div>
    
    )
       
}

export default Home;