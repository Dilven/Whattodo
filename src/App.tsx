import React from 'react';
import './styles/App.scss';
import { Navigation } from './components/Navigation/Navigation';
import { BrowserRouter as Router } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Navigation />
      </div>
    </Router>
  );
};

export default App;
