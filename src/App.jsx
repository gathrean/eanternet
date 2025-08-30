import React from 'react';
import Navbar from './Navbar';

import './styles/App.css';
import './styles/index.css';
import './styles/fonts.css';

function App() {
  return (
    <div>
      <Navbar />
      <div className="app">
        <h1 className="title">EANTERNET</h1>
      </div>
    </div>
  );
}

export default App;
