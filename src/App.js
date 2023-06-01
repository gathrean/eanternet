import React, { useState, useRef, useEffect } from 'react';
import './fonts/Benzin Bold.ttf';
import './styles/App.css';

// Pages
import About from './pages/About';
import Discography from './pages/Discography';
import Beats from './pages/Beats';
import Contact from './pages/Contact';

// Year pages
import Year2021 from './pages/Year2021';
import Year2020 from './pages/Year2020';
import Year2019 from './pages/Year2019';
import Year2018 from './pages/Year2018';
import Year2017 from './pages/Year2017';
import Year2016 from './pages/Year2016';
import Year2015 from './pages/Year2015';

function App() {
  const [activePage, setActivePage] = useState('about');
  const aboutRef = useRef(null);
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
      case 'about':
        ref = aboutRef;
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
        ref = aboutRef;
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

    observer.observe(aboutRef.current);
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
        <div className="section" ref={aboutRef} id="about">
          <About />
        </div>
        <div className="section" ref={beatsRef} id="beats">
          <Beats />
        </div>
        <div className="section" ref={contactRef} id="contact">
          <Contact />
        </div>
        <div className="section" ref={discographyRef} id="discography">
          <Discography />
          {activePage === 'discography' && (
            <>
              <Year2021 activePage={activePage} handlePageClick={handlePageClick} />
              <Year2020 activePage={activePage} handlePageClick={handlePageClick} />
              <Year2019 activePage={activePage} handlePageClick={handlePageClick} />
              <Year2018 activePage={activePage} handlePageClick={handlePageClick} />
              <Year2017 activePage={activePage} handlePageClick={handlePageClick} />
              <Year2016 activePage={activePage} handlePageClick={handlePageClick} />
              <Year2015 activePage={activePage} handlePageClick={handlePageClick} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function Navbar({ activePage, handlePageClick }) {
  const handleYearClick = (year) => {
    const sectionId = `year-${year}`;
    const sectionRef = document.getElementById(sectionId);
    if (sectionRef) {
      sectionRef.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }
  };  

  return (
    <nav className="navbar benzin-font">
      <img className="navbar-logo" src="ean star text.png" alt="Ean Star Text" />

      <ul className="navbar-links">
        <li>
          <a
            href="#about"
            className={activePage === 'about' ? 'active' : ''}
            onClick={() => handlePageClick('about')}
          >
            <span className="navbar-title">about</span>
            {activePage === 'about' && <span className="navbar-symbol">✦</span>}
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
        {activePage === 'discography' && (
          <>
            <li>
              <a
                href="#year-2021"
                className={activePage === 'year-2021' ? 'active' : ''}
                onClick={() => handleYearClick('year-2021')}
              >
                <span className="navbar-title">2021</span>
              </a>
            </li>
            <li>
              <a
                href="#year-2020"
                className={activePage === 'year-2020' ? 'active' : ''}
                onClick={() => handleYearClick('year-2020')}
              >
                <span className="navbar-title">2020</span>
              </a>
            </li>
            <li>
              <a
                href="#year-2019"
                className={activePage === 'year-2019' ? 'active' : ''}
                onClick={() => handleYearClick('year-2019')}
              >
                <span className="navbar-title">2019</span>
              </a>
            </li>
            <li>
              <a
                href="#year-2018"
                className={activePage === 'year-2018' ? 'active' : ''}
                onClick={() => handleYearClick('year-2018')}
              >
                <span className="navbar-title">2018</span>
              </a>
            </li>
            <li>
              <a
                href="#year-2017"
                className={activePage === 'year-2017' ? 'active' : ''}
                onClick={() => handleYearClick('year-2017')}
              >
                <span className="navbar-title">2017</span>
              </a>
            </li>
            <li>
              <a
                href="#year-2016"
                className={activePage === 'year-2016' ? 'active' : ''}
                onClick={() => handleYearClick('year-2016')}
              >
                <span className="navbar-title">2016</span>
              </a>
            </li>
            <li>
              <a
                href="#year-2015"
                className={activePage === 'year-2015' ? 'active' : ''}
                onClick={() => handleYearClick('year-2015')}
              >
                <span className="navbar-title">2015</span>
              </a>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default App;