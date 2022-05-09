import React from 'react'
import "./LandingPage.scss" 
import Header from '../components/Header/Header';
import About from '../components/About/About';
import Feature from '../components/Feature/Feature';
import Tour from '../components/Tour/Tour';
import Testimonial from '../components/Testimonial/Testimonial';
import Booking from '../components/Booking/Booking';

const LandingPage = () => {
  return (
      <>
        <Header/>
        <About/>
        <Feature/>
        <Tour/>
        <Testimonial/>
        <Booking/>
      </>
  )
}

export default LandingPage