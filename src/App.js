import React from 'react';
import { Switch } from 'react-router';
import 'rsuite/dist/styles/rsuite-default.css';
import Signin from './pages/Signin';
import Index from './pages/Home';
import './styles/main.scss';
import PrivateRotue from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { ProfileProvider } from './context/profile.context';

function App() {
  return (
    <ProfileProvider>
      <Switch>
        <PublicRoute path="/signin">
          <Signin />
        </PublicRoute>
        <PrivateRotue path="/">
          <Index />
        </PrivateRotue>
      </Switch>
    </ProfileProvider>
  );
}

export default App;
