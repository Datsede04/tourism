import React from 'react'
import FeatureCard from './FeatureCard/FeatureCard'
import './Feature.scss'

const Feature = () => {
  return (
    <div className="section-features" id="section-features">
      <div className="row">
       <FeatureCard
         iconName=" icon-basic-world"
         title="Explore"
         discription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates iste hic ." 
         />
       <FeatureCard
         iconName=" icon-basic-compass"
         title="Meet Nature"
         discription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates iste hic ." 
         />
       <FeatureCard
         iconName=" icon-basic-map"
         title="Find your way"
         discription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates iste hic ." 
         />
       <FeatureCard
         iconName=" icon-basic-heart"
         title="Live healthier"
         discription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates iste hic ." 
         />
      </div>
    </div>
  )
}

export default Feature