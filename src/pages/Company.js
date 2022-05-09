import React from 'react'
import Counter from '../components/Counter/Counter'
import SecondaryHeader from '../components/SecondaryHeader/SecondaryHeader'
import './Comapany.scss'
import img1 from '../assets/img/nat-1.jpg'
import img2 from '../assets/img/nat-2.jpg'
import img3 from '../assets/img/nat-3.jpg'
import staff1 from "../assets/img/nat-8.jpg"
import staff2 from "../assets/img/nat-9.jpg"

import CompanyCard from '../components/CompanyCard/CompanyCard'
import TestimonialCard from '../components/Testimonial/TestimonialCard/TestimonialCard'


const Company = () => {
  return (
    <div className="aboutus">
            <div className="aboutus__top">
                 
                <SecondaryHeader title="About Us"/>
                <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary ">
              Exciting tours for adventurous people
          </h2>
       </div>

       <div className="row">
          <div className="col-1-of-2">
              <h3 className="heading-tertiary u-margin-bottom-small">You're going to fall in love with the nature</h3>
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, fugiat ab vitae pariatur, debitis exercitationem quia quas repudiandae omnis atque ex aperiam sed quisquam dolorem nihil qui sapiente molestiae iusto!
              </p>
        
              <h3 className="heading-tertiary u-margin-bottom-small">Live adventure like you never have before</h3>
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, fugiat ab vitae pariatur, debitis exercitationem quia quas repudiandae omnis atque ex aperiam sed quisquam dolorem nihil qui sapiente molestiae iusto!
              </p>
            
          </div>
          <div className="col-1-of-2">
              <div className="composition">
                  <img src={img1} alt="nature picture" className="composition__photo composition__photo--p1" />
                  <img src={img2} alt="nature picture" className="composition__photo composition__photo--p2" />
                  <img src={img3} alt="nature picture" className="composition__photo composition__photo--p3" />
              </div>
          </div>
       </div>
    </div>
     
    <section className="staff">
            <div className="row">

                <h3 className="headding-primary--main u-margin-bottom-small">Our Staff</h3>

                    <div className="col-1-of-3">
                        <CompanyCard gender="Male" count="34"/>
                    </div>
                    <div className="col-1-of-3">
                        <CompanyCard gender="Female" count="24"/>
                    </div>
                    <div className="col-1-of-3">
                        <CompanyCard gender="Total" count="58"/>
                    </div>    
            </div>

            <TestimonialCard  
            img={staff1}
            name="Mary Smith" 
            statment="CEO"  
            description=""/>
            <TestimonialCard  
            img={staff2}
            name="Mary Smith" 
            statment="CEO"  
            description=""/>
    </section>
    </div>
  )
}

export default Company