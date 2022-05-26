import React from 'react'
import "./LandingPage.scss" 
import Header from '../components/Header/Header';
import About from '../components/About/About';
import Feature from '../components/Feature/Feature';
import Tour from '../components/Tour/Tour';
import Testimonial from '../components/Testimonial/Testimonial';
import Booking from '../components/Booking/Booking';
import Slideshow from "../components/SlideShow/SlideShow"
import Ourpartner from '../components/OurPartner/Ourpartner';
import Contactus from '../components/ContactUs/ContactUs';

const LandingPage = () => {
  return (
      <>
        <Header/>
        <About/>
        <Feature/>
        <Tour/>
        <Testimonial/>
        <Booking/>
        <Slideshow/>
        {/* <Ourpartner/> */}
        <Contactus/>
      </>
  )
}

export default LandingPage