import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Wallet from './pages/Wallet';
import Login from './pages/Login';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/carteira" component={ Wallet } />
        <Route exact path="/" component={ Login } />
      </Switch>
    );
  }
}

export default App;
