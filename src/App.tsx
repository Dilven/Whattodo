import React from 'react';
import './styles/App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation/Navigation';
import { paths } from './configs/path.config';
import { LoginPage } from './pages/Auth/LoginPage';
import { RegisterPage } from './pages/Auth/RegisterPage';
import { DashboardPage } from './pages/Dashboard/DashboardPage';
import { SettingsPage } from './pages/Settings/SettingsPage';
import { CafesPage } from './pages/Cafes/CafesPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <div className="content">
          <Route exact path="/" component={DashboardPage} />
          <Route path={`/${paths.login}`} component={LoginPage} />
          <Route path={`/${paths.register}`} component={RegisterPage} />
          <Route path={`/${paths.settings}`} component={SettingsPage} />
          <Route path={`/${paths.cafes}`} component={CafesPage} />
        </div>
      </div>
    </Router>
  );
};

export default App;
