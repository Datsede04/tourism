import React from 'react'
import Counter from '../Counter/Counter'

const CompanyCard = (props) => {
  return (
            <div className="feature-box">
                <h3 className="heading-tertiary u-margin-bottom-small">
                    {props.gender}
                </h3>
                <h2 className="heading-tertiary u-margin-bottom-small">
                    <Counter end={props.count}/>
                </h2>
          
          </div>  
  )
}

export default CompanyCard