import React from 'react';

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

export default Navbar;
