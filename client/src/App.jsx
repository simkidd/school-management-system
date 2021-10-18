import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HeaderComp from './components/HeaderComp';
import NavComp from './components/NavComp';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <HeaderComp />
      <NavComp />
      <Switch>
        <Route path='/' component={Home} exact />
      </Switch>
    </Router>
  )
}

export default App
