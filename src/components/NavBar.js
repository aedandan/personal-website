import React from 'react';
import {Link} from 'react-router-dom';

function NavBar() {
    return(
        <div>
            <div>
                <Link to="/">
                    Home
                </Link>
            </div>
            <div>
                <Link to="/about">
                    About
                </Link>
            </div>
            <div>
                <Link to="/projects">
                    Projects
                </Link>
            </div>
        </div>
    );
}

export default NavBar;