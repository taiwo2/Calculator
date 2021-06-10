import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Calculator from './Calculator';
import Home from './Home';
import NavBar from './NavBar';
import Qoute from './Qoute';

const Router = () => (
  <BrowserRouter>
    <div>
      <NavBar />
      <Switch>
        <Route path="/calculator" component={Calculator} />
        <Route path="/quote" component={Qoute} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Router;
