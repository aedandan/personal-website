import React from 'react';
import {Link} from 'react-router-dom';

function NavBar() {
    const [isExpanded, toggleIsExpanded] = React.useState(false);

    

    return(
        <div id="nav-menu">
            <h1>Aedan McCall</h1>
            <button 
            className="mobile-nav-toggle"
            aria-controls="nav-bar-wrapper" 
            aria-expanded={isExpanded ? "true" : "false"}
            onClick={() => toggleIsExpanded(!isExpanded)} ><span className="sr-only">Menu</span></button>
            <ul id='nav-bar-wrapper'
                className={isExpanded ? 'expanded' : 'hidden'}>
                <li id='nav-bar-link'>
                    <Link onClick={() => toggleIsExpanded(false)} to="/">
                        Home
                    </Link>
                </li>
                <li id='nav-bar-link'>
                    <Link onClick={() => toggleIsExpanded(false)} to="/about">
                        About
                    </Link>
                </li>
                <li id='nav-bar-link'>
                    <Link onClick={() => toggleIsExpanded(false)} to="/projects">
                        Projects
                    </Link>
                </li>
            </ul>
        </div>
        
    );
}

export default NavBar;