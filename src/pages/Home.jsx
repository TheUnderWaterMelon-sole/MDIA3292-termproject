// Home.jsx

import React from "react";
import {Link} from "react-router-dom";
import homeImage from '../assets/home-image.jpg?url';

// Styles
import '../css/styles.css';

function Home() {
    return (


    <div>
        <h1>This is the Home page</h1>
        <div className="image-container">
            <img src={homeImage} alt="chrocheted cute monster" />
        </div>
        <p>Some explanation about the site goes here</p>
        <Link to="/questions">
        <button className="primary-btn">Click</button>
      </Link>
    </div>
    
    )
       
}

export default Home;