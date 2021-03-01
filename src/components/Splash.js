import React from 'react'
import './Splash.css';
import { Link } from 'react-router-dom';

const Splash = () => {
    return (
        <div className="splash--cont">
            <header className="splashscreen--wrapper">
                
                
                <h1 className="splashscreen--text">welcome to web suite studio</h1>
                <div className="dividing--line"></div>
                <Link to="/home">
                    <button className="entrance--button" to='/home'>enter</button>
                </Link>
            </header>
        </div>
    )
}

export default Splash
