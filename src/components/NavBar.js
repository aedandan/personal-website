import React from 'react';
import {Link} from 'react-router-dom';

function NavBar() {
    return(
        <ul id='nav-bar-wrapper'>
            <li id='nav-bar-link'>
                <Link to="/">
                    Home
                </Link>
            </li>
            <li id='nav-bar-link'>
                <Link to="/about">
                    About
                </Link>
            </li>
            <li id='nav-bar-link'>
                <Link to="/projects">
                    Projects
                </Link>
            </li>
        </ul>
    );
}

export default NavBar;