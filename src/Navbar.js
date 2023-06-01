import React from 'react';

const navLinks = [
  { page: 'about', title: 'about' },
  { page: 'beats', title: 'beats' },
  { page: 'contact', title: 'contact' },
  { page: 'discography', title: 'discography' },
  { page: 'year-2021', title: '2021' },
  { page: 'year-2020', title: '2020' },
  { page: 'year-2019', title: '2019' },
  { page: 'year-2018', title: '2018' },
  { page: 'year-2017', title: '2017' },
  { page: 'year-2016', title: '2016' },
  { page: 'year-2015', title: '2015' },
];

function Navbar({ activePage, handlePageClick }) {
  const isYearPage = activePage.startsWith('year-');
  const shouldShowYears = activePage === 'discography' || isYearPage;

  return (
    <nav className="navbar benzin-font">
      <img className="navbar-logo" src="ean star text.png" alt="Ean Star Text" />

      <ul className="navbar-links">
        {navLinks.map((link) => {
          if (link.page.startsWith('year-') && !shouldShowYears) {
            return null; // Hide year links when active page is not "discography" or a specific year page
          }
          return (
            <li key={link.page}>
              <a
                href={`#${link.page}`}
                className={(activePage === link.page || (isYearPage && link.page === 'discography')) ? 'active' : ''}
                onClick={() => handlePageClick(link.page)}
              >
                <span className="navbar-title">{link.title}</span>
                {(activePage === link.page || (isYearPage && link.page === 'discography')) && <span className="navbar-symbol">✦</span>}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;