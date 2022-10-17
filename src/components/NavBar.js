import React from 'react';
import {Link} from 'react-router-dom';

function NavBar() {
    const [isExpanded, toggleIsExpanded] = React.useState(false);

    const closeMenu = () => {
        toggleIsExpanded(false);
    }

    const buttonToggle = () => {
        toggleIsExpanded(!isExpanded);
    }

    return(
        <div 
        id="nav-menu">
            <h1>Aedan McCall</h1>
            <button
            className="mobile-nav-toggle"
            aria-controls="nav-bar-wrapper"
            aria-expanded={isExpanded ? "true" : "false"}
            onClick={buttonToggle}
            >
                <span 
                className="sr-only"
                >Menu
                </span>
            </button>
            <ul 
            id='nav-bar-wrapper'
            className={isExpanded ? 'expanded' : 'hidden'}
            >
                <li 
                className='nav-bar-link'>
                    <Link 
                    onClick={closeMenu} 
                    to="/"
                >
                        Home
                    </Link>
                </li>
                <li 
                className='nav-bar-link'>
                    <Link 
                    onClick={closeMenu}
                    to="/about"
                >
                        About
                    </Link>
                </li>
                <li 
                className='nav-bar-link'>
                    <Link 
                    onClick={closeMenu} 
                    to="/projects"
                >
                        Projects
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default NavBar;