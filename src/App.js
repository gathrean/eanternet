import React, { useState, useRef } from 'react';
import './fonts/Benzin Bold.ttf';
import './styles/App.css';

// Pages
import Home from './pages/Home';
import Discography from './pages/Discography';
import Beats from './pages/Beats';
import Contact from './pages/Contact';

function App() {
  const [activePage, setActivePage] = useState('home');
  const homeRef = useRef(null);
  const discographyRef = useRef(null);
  const beatsRef = useRef(null);
  const contactRef = useRef(null);

  const handlePageClick = (page) => {
    setActivePage(page);
    scrollToSection(page);
  };

  const scrollToSection = (section) => {
    let ref;
    switch (section) {
      case 'home':
        ref = homeRef;
        break;
      case 'discography':
        ref = discographyRef;
        break;
      case 'beats':
        ref = beatsRef;
        break;
      case 'contact':
        ref = contactRef;
        break;
      default:
        ref = homeRef;
        break;
    }
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  };

  return (
    <div className="container">
      <Navbar activePage={activePage} handlePageClick={handlePageClick} />
      <div className="content">
        <div className="section" ref={homeRef}>
          <Home />
        </div>
        <div className="section" ref={discographyRef}>
          <Discography />
        </div>
        <div className="section" ref={beatsRef}>
          <Beats />
        </div>
        <div className="section" ref={contactRef}>
          <Contact />
        </div>
      </div>
    </div>
  );
}

function Navbar({ activePage, handlePageClick }) {
  return (
    <nav className="navbar benzin-font">
      <img className="navbar-logo" src="ean star text.png" alt="Ean Star Text" />

      <ul className="navbar-links">
        <li>
          <a
            href="#home"
            className={activePage === 'home' ? 'active' : ' '}
            onClick={() => handlePageClick('home')}
          >
            home{activePage === 'home' ? '✦' : ' '}
          </a>
        </li>
        <li>
          <a
            href="#discography"
            className={activePage === 'discography' ? 'active' : ' '}
            onClick={() => handlePageClick('discography')}
          >
            discography{activePage === 'discography' ? '✦' : ' '}
          </a>
        </li>
        <li>
          <a
            href="#beats"
            className={activePage === 'beats' ? 'active' : ' '}
            onClick={() => handlePageClick('beats')}
          >
            beats{activePage === 'beats' ? '✦' : ' '}
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={activePage === 'contact' ? 'active' : ' '}
            onClick={() => handlePageClick('contact')}
          >
            contact{activePage === 'contact' ? '✦' : ' '}
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default App;