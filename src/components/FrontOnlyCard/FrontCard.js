import React from 'react'
import Button from '../Button/Button'

const FrontCard = (props) => {
  return (
      <div className="col-1-of-4">

    <div className="card">
       <div className="card__side card__side--frontOnly">
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
          
           <div className="u-center-text">
               <a href="/detailed" className="btn btn--green">Discover More</a>
            </div>
          </div>

       </div>
      </div>
    </div>
  )
}

export default FrontCard