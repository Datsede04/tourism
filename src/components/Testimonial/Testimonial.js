import React from 'react'
import './Testimonial.scss'
import img from "../../assets/img/nat-8.jpg"
import TestimonialCard from './TestimonialCard/TestimonialCard'
import SecondaryHeader from '../SecondaryHeader/SecondaryHeader'
import Vmp4 from "../../assets/img/video.mp4"
import Vwebm from "../../assets/img/video.webm"

const Testimonial = () => {
  return (
    <section className="section-testimonial" id="section-testimonial">
         <div className= "bg-video">
            <video className="bg-video__content" autoPlay muted loop>
                <source src={Vmp4} type="video/mp4"/>
                <source src={Vwebm} type="video/webm"/>
                Your Browser is not supported!
            </video>
        </div>         
        <SecondaryHeader title="We make people genuinely happy"/>
        <TestimonialCard  
            img={img}
            name="Mary Smith" 
            statment="Wow that was the best day ever"  
            description="
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, error! Aut dolore eligendi odit error cupiditate nemo hic? Deserunt nihil voluptatum soluta error voluptates incidunt earum sit voluptatibus molestias vel!"/>
 
        <TestimonialCard  
            img={img}
            name="Mary Smith" 
            statment="Wow that was the best day ever"  
            description="
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, error! Aut dolore eligendi odit error cupiditate nemo hic? Deserunt nihil voluptatum soluta error voluptates incidunt earum sit voluptatibus molestias vel!"/>
            
        <div className="u-center-text u-margin-top-small">
            <a href="#" className="btn-text">Learn more ➝</a>
        </div>    
    </section>
  )
}

export default Testimonial