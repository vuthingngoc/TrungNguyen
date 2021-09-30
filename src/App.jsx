import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Homepage from './pages/HomePage';
import HomepageHeader from './pages/HomePage/components/Header/HomepageHeader';
import HeaderBanner from './pages/HomePage/components/HeaderBanner/HeaderBanner';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" render={() => <Homepage />} />
      <Route exact path="/test" render={() => <HomepageHeader />} />
      <Route exact path="/new" render={() => <HeaderBanner />} />
      <Redirect to="/" />
    </BrowserRouter>
  );
}
export default App;
