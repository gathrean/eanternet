import React from 'react';
import './styles/Navbar.css';

function Navbar() {
        return (
                <nav className="navbar">
                        <ul className="nav-list">
                                <li className="nav-item"><a href="/">HOME</a></li>
                                <li className="nav-item"><a href="/music">LISTEN</a></li>
                                <li className="nav-item">
                                        <a
                                                href="https://www.youtube.com/eanternet"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                        >
                                                WATCH
                                        </a>
                                </li>
                        </ul>
                </nav>
        );
}

export default Navbar;