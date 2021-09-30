import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Header from './components/index';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Homepage from './pages/HomePage';
import HomepageHeader from './pages/HomePage/components/Header/HomepageHeader';
import HeaderBanner from './pages/HomePage/components/HeaderBanner/HeaderBanner';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={() => <HomepageHeader />} />
      <Route exact path="/test" render={() => <Homepage />} />
      <Route exact path="/test/new" render={() => <HeaderBanner />} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
