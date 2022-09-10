import React from 'react';
import {Link} from 'react-router-dom';

function NavBar() {
    return(
        <div className='nav-bar-wrapper'>
            <div className='nav-bar-link'>
                <Link to="/">
                    Home
                </Link>
            </div>
            <div className='nav-bar-link'>
                <Link to="/about">
                    About
                </Link>
            </div>
            <div className='nav-bar-link'>
                <Link to="/projects">
                    Projects
                </Link>
            </div>
        </div>
    );
}

export default NavBar;