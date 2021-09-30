import React from 'react';
import HomepageHeader from './components/Header/HomepageHeader';
// import HeaderBanner from './components/HeaderBanner/HeaderBanner';
import ColorNavbar from './components/Navbar/ColorNavbar';

export default function Homepage() {
  return (
    <>
      <ColorNavbar />
      <HomepageHeader />
    </>
  );
}
