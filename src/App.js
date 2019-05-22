import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Routes from './components/Routes';

import './App.css';

function App() {
  return (
    <Router>
      <div className="raidit-app">
        <Sidebar/>
        <Routes/>
      </div>
    </Router>
  );
}

export default App;
