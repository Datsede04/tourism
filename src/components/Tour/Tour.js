import React from 'react'
import Button from '../Button/Button'
import Card from '../Card/Card'
import SecondaryHeader from '../SecondaryHeader/SecondaryHeader'
import './Tour.scss'


const Tour = () => {
  return (
    <section className="section-tour" id="section-tour">
        <SecondaryHeader title="Most popular tours"/>
      <div className="row">      
            <Card title="The Sea Explorer"
                  featur1="3 day tours"
                  featur2="Up to 30 people"
                  featur3="2 tour guides"
                  featur4="Sleep in cozy hotels"
                  featur5= "Difficultsy: easy"
                  priceMessage="Only"
                  price= "$234"
                  picture= "card__picture--1"
                  headingSpan="card__heading-span--1"
                  backSideNumber = "card__side--back-1"
                 
                  />
            <Card title="The Forest Hiker"
                  featur1="7 day tours"
                  featur2="Up to 60 people"
                  featur3="6 tour guides"
                  featur4="Sleep in provided tent"
                  featur5= "Difficultsy: medium"
                  priceMessage="Only"
                  price= "$497"
                  picture= "card__picture--2"
                  headingSpan="card__heading-span--2"
                  backSideNumber = "card__side--back-2"
                  />

            <Card title="Snow Adventure"
                  featur1="5 day tours"
                  featur2="Up to 15 people"
                  featur3="3 tour guides"
                  featur4="Sleep in provided tent"
                  featur5= "Difficultsy: Hard"
                  priceMessage="Only"
                  price= "$833"
                  picture= "card__picture--3"
                  headingSpan="card__heading-span--3"
                  backSideNumber = "card__side--back-3"
                  />
      </div>
      <div className="u-center-text u-margin-top-medium">
         <a href="/alltourse" className="btn btn--green">Discover all tours</a>
      </div>            
    </section>
  )
}

export default Tour