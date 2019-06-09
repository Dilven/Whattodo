import React from 'react';
import './styles/App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation/Navigation';
import { paths } from './configs/paths.config';
import { LoginPage } from './pages/Auth/LoginPage';
import { RegisterPage } from './pages/Auth/RegisterPage';
import { AuthPage } from './pages/Auth/AuthPage';
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
          <Route path={`/${paths.client.login}`} component={LoginPage} />
          <Route path={`/${paths.client.register}`} component={RegisterPage} />
          <Route path={`/${paths.client.settings}`} component={SettingsPage} />
          <Route path={`/${paths.client.cafes}`} component={CafesPage} />
          <Route path={`/${paths.client.auth}`} component={AuthPage} />
        </div>
      </div>
    </Router>
  );
};

export default App;
