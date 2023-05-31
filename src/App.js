import React, { useState } from 'react';
import './fonts/Benzin Bold.ttf';
import './styles/App.css';

function Navbar() {
  // Use state to track the active page
  const [activePage, setActivePage] = useState('home');

  // Function to handle click event and update active page
  const handlePageClick = (page) => {
    setActivePage(page);
  };

  return (
    <nav className="navbar benzin-font">
      <img className="navbar-logo" src="ean star text.png" alt="Ean Star Text" />

      <ul className="navbar-links">
        <li>
          <a
            href="#"
            className={activePage === 'home' ? 'active' : ''}
            onClick={() => handlePageClick('home')}
          >
            home{activePage === 'home' ? '✦' : ''}
          </a>
        </li>
        <li>
          <a
            href="#"
            className={activePage === 'discography' ? 'active' : ''}
            onClick={() => handlePageClick('discography')}
          >
            discography{activePage === 'discography' ? '✦' : ''}
          </a>
        </li>
        <li>
          <a
            href="#"
            className={activePage === 'beats' ? 'active' : ''}
            onClick={() => handlePageClick('beats')}
          >
            beats{activePage === 'beats' ? '✦' : ''}
          </a>
        </li>
        <li>
          <a
            href="#"
            className={activePage === 'contact' ? 'active' : ''}
            onClick={() => handlePageClick('contact')}
          >
            contact{activePage === 'contact' ? '✦' : ''}
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;