import React from 'react'
import Button from '../Button/Button'
import './Card.scss'

const Card = (props) => {
   console.log(props)
return (
   <div className="col-1-of-3">
    <div className="card">
       <div className="card__side card__side--front">
          <div className={`card__picture ${props.picture}`}>
          </div>
          <div className="card__heading">
             <span className={`card__heading-span ${props.headingSpan}`}>{props.title}</span>
          </div>
          <div className="card__details">
              <ul>
                 <li>{props.featur1}</li>
                 <li>{props.featur2}</li>
                 <li>{props.featur3}</li>
                 <li>{props.featur4}</li>
                 <li>{props.featur5}</li>
              </ul>
          </div>
       </div>
       <div className={`card__side card__side--back ${ props.backSideNumber}`}>
          <div className="card__cta">
             <div className="card__price-box">
                <div className="card__price-only">{props.priceMessage}</div>    
                <div className="card__price-value">{props.price}</div>    
            </div>   
            <Button link="section-booking" color="btn--white" name="Book now!"/>
         </div>
       </div>
      </div>
    </div>
  )
}

export default Card