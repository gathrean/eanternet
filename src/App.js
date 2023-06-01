import React, { useState, useRef, useEffect } from 'react';
import './fonts/Benzin Bold.ttf';
import './styles/App.css';

// Pages
import About from './pages/About';
import Beats from './pages/Beats';
import Contact from './pages/Contact';
import Discography from './pages/Discography';

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
  const [activeYear, setActiveYear] = useState(null);  
  const aboutRef = useRef(null);
  const discographyRef = useRef(null);
  const beatsRef = useRef(null);
  const contactRef = useRef(null);

  const year2021Ref = useRef(null);
  const year2020Ref = useRef(null);
  const year2019Ref = useRef(null);
  const year2018Ref = useRef(null);
  const year2017Ref = useRef(null);
  const year2016Ref = useRef(null);
  const year2015Ref = useRef(null);

  const handlePageClick = (page) => {
    setActivePage(page);
    if (page.startsWith('year-')) {
      setActiveYear(page);
    } else {
      setActiveYear(null);
    }
    scrollToSection(page);
  };  

  const scrollToSection = (section) => {
    let ref;
    switch (section) {
      case 'about':
        ref = aboutRef;
        break;
      case 'beats':
        ref = beatsRef;
        break;
      case 'contact':
        ref = contactRef;
        break;
      case 'discography':
        ref = discographyRef;
        break;
      case 'year-2021':
        ref = year2021Ref;
        break;
      case 'year-2020':
        ref = year2020Ref;
        break;
      case 'year-2019':
        ref = year2019Ref;
        break;
      case 'year-2018':
        ref = year2018Ref;
        break;
      case 'year-2017':
        ref = year2017Ref;
        break;
      case 'year-2016':
        ref = year2016Ref;
        break;
      case 'year-2015':
        ref = year2015Ref;
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
    observer.observe(year2021Ref.current);
    observer.observe(year2020Ref.current);
    observer.observe(year2019Ref.current);
    observer.observe(year2018Ref.current);
    observer.observe(year2017Ref.current);
    observer.observe(year2016Ref.current);
    observer.observe(year2015Ref.current);

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
        </div>
        <div className="section" ref={year2021Ref} id="year-2021">
          <Year2021 />
        </div>
        <div className="section" ref={year2020Ref} id="year-2020">
          <Year2020 />
        </div>
        <div className="section" ref={year2019Ref} id="year-2019">
          <Year2019 />
        </div>
        <div className="section" ref={year2018Ref} id="year-2018">
          <Year2018 />
        </div>
        <div className="section" ref={year2017Ref} id="year-2017">
          <Year2017 />
        </div>
        <div className="section" ref={year2016Ref} id="year-2016">
          <Year2016 />
        </div>
        <div className="section" ref={year2015Ref} id="year-2015">
          <Year2015 />
        </div>
      </div>
    </div >
  );
}

function Navbar({ activePage, handlePageClick }) {

  return (
    <nav className="navbar benzin-font">
      <img className="navbar-logo" src="ean star text.png" alt="Ean Star Text" />

      <ul className="navbar-links">

        {/* About */}
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

        {/* Beats */}
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

        {/* Contact */}
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

        {/* Discography */}
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

        {/* 2021 */}
        <li>
          <a
            href="#year-2021"
            className={activePage === 'year-2021' ? 'active' : ''}
            onClick={() => handlePageClick('year-2021')}
          >
            <span className="navbar-title">2021</span>
            {(activePage === 'year-2021') && <span className="navbar-symbol">✦</span>}
          </a>
        </li>

        {/* 2020 */}
        <li>
          <a
            href="#year-2020"
            className={activePage === 'year-2020' ? 'active' : ''}
            onClick={() => handlePageClick('year-2020')}
          >
            <span className="navbar-title">2020</span>
            {(activePage === 'year-2020') && <span className="navbar-symbol">✦</span>}
          </a>
        </li>

        {/* 2019 */}
        <li>
          <a
            href="#year-2019"
            className={activePage === 'year-2019' ? 'active' : ''}
            onClick={() => handlePageClick('year-2019')}
          >
            <span className="navbar-title">2019</span>
            {(activePage === 'year-2019') && <span className="navbar-symbol">✦</span>}
          </a>
        </li>

        {/* 2018 */}
        <li>
          <a
            href="#year-2018"
            className={activePage === 'year-2018' ? 'active' : ''}
            onClick={() => handlePageClick('year-2018')}
          >
            <span className="navbar-title">2018</span>
            {(activePage === 'year-2018') && <span className="navbar-symbol">✦</span>}
          </a>
        </li>

        {/* 2017 */}
        <li>
          <a
            href="#year-2017"
            className={activePage === 'year-2017' ? 'active' : ''}
            onClick={() => handlePageClick('year-2017')}
          >
            <span className="navbar-title">2017</span>
            {(activePage === 'year-2017') && <span className="navbar-symbol">✦</span>}
          </a>
        </li>

        {/* 2016 */}
        <li>
          <a
            href="#year-2016"
            className={activePage === 'year-2016' ? 'active' : ''}
            onClick={() => handlePageClick('year-2016')}
          >
            <span className="navbar-title">2016</span>
            {(activePage === 'year-2016') && <span className="navbar-symbol">✦</span>}
          </a>
        </li>


        <li>
          <a
            href="#year-2015"
            className={activePage === 'year-2015' ? 'active' : ''}
            onClick={() => handlePageClick('year-2015')}
          >
            <span className="navbar-title">2015</span>
            {(activePage === 'year-2015') && <span className="navbar-symbol">✦</span>}
          </a>
        </li>


      </ul>
    </nav>
  );
}

export default App;