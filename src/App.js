import React, { useState, useRef, useEffect } from 'react';
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

  useEffect(() => {
    const observerOptions = {
      rootMargin: '-100px 0px -100px 0px', // Adjust the root margin as needed
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActivePage(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    observer.observe(homeRef.current);
    observer.observe(discographyRef.current);
    observer.observe(beatsRef.current);
    observer.observe(contactRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="container">
      <Navbar activePage={activePage} handlePageClick={handlePageClick} />
      <div className="content">
        <div className="section" ref={homeRef} id="home">
          <Home />
        </div>
        <div className="section" ref={discographyRef} id="discography">
          <Discography />
        </div>
        <div className="section" ref={beatsRef} id="beats">
          <Beats />
        </div>
        <div className="section" ref={contactRef} id="contact">
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
            className={activePage === 'home' ? 'active' : ''}
            onClick={() => handlePageClick('home')}
          >
            <span className="navbar-title">home</span>
            {activePage === 'home' && <span className="navbar-symbol">✦</span>}
          </a>
        </li>
        <li>
          <a
            href="#discography"
            className={activePage === 'discography' ? 'active' : ''}
            onClick={() => handlePageClick('discography')}
          >
            <span className="navbar-title">discography</span>
            {activePage === 'discography' && <span className="navbar-symbol">✦</span>}
          </a>
        </li>
        <li>
          <a
            href="#beats"
            className={activePage === 'beats' ? 'active' : ''}
            onClick={() => handlePageClick('beats')}
          >
            <span className="navbar-title">beats</span>
            {activePage === 'beats' && <span className="navbar-symbol">✦</span>}
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={activePage === 'contact' ? 'active' : ''}
            onClick={() => handlePageClick('contact')}
          >
            <span className="navbar-title">contact</span>
            {activePage === 'contact' && <span className="navbar-symbol">✦</span>}
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default App;