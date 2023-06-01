import React, { useState, useRef, useEffect } from 'react';
import './fonts/Benzin Bold.ttf';
import './styles/App.css';

// Navbar
import Navbar from './Navbar';

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

  // Handle click on a page link in the navbar
  const handlePageClick = (page) => {
    setActivePage(page);
    if (page.startsWith('year-')) {
      setActiveYear(page);
    } else {
      setActiveYear(null);
    }
    scrollToSection(page);
  };

  // Scroll to a section by its id
  const scrollToSection = (section) => {
    const ref = sectionRefs[section] || aboutRef;
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  };

  // Map the section refs to their ids
  const sectionRefs = {
    about: aboutRef,
    beats: beatsRef,
    contact: contactRef,
    discography: discographyRef,
    'year-2021': year2021Ref,
    'year-2020': year2020Ref,
    'year-2019': year2019Ref,
    'year-2018': year2018Ref,
    'year-2017': year2017Ref,
    'year-2016': year2016Ref,
    'year-2015': year2015Ref,
  };

  // Set the active page based on the section that is in view
  useEffect(() => {
    const observerOptions = {
      rootMargin: '-100px 0px -100px 0px',
    };

    // Handle intersection of a section with the viewport
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActivePage(entry.target.id);
        }
      });
    };

    // Create an intersection observer instance
    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // Observe the section refs
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

    // The navbar and the content
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
    </div>
  );
}

export default App;