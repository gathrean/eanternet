import React, { useState, useEffect } from 'react';
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

const sectionRefs = {};

function App() {
  const [activePage, setActivePage] = useState('about');
  const [activeYear, setActiveYear] = useState(null);

  // Define section data
  const sections = [
    { id: 'about', component: <About /> },
    { id: 'beats', component: <Beats /> },
    { id: 'contact', component: <Contact /> },
    { id: 'discography', component: <Discography /> },
    { id: 'year-2021', component: <Year2021 /> },
    { id: 'year-2020', component: <Year2020 /> },
    { id: 'year-2019', component: <Year2019 /> },
    { id: 'year-2018', component: <Year2018 /> },
    { id: 'year-2017', component: <Year2017 /> },
    { id: 'year-2016', component: <Year2016 /> },
    { id: 'year-2015', component: <Year2015 /> },
  ];

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
    const ref = sectionRefs[section] || sectionRefs.about;
    ref.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
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
    sections.forEach((section) => {
      sectionRefs[section.id] = document.getElementById(section.id);
      observer.observe(sectionRefs[section.id]);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    // The navbar and the content
    <div className="container">
      <Navbar activePage={activePage} handlePageClick={handlePageClick} />
      <div className="content">
        {sections.map((section) => (
          <div className="section" id={section.id} key={section.id} ref={(el) => (sectionRefs[section.id] = el)}>
            {section.component}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;