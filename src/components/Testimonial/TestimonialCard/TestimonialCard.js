import React from 'react'

const TestimonialCard = (props) => {
  return (
    <div className="row">
    <div className="testimonial">
        <figure className="testimonial__shape">
            <img src={props.img} alt="person" className="testimonial__img"/>
            <figcaption className="testimonial__caption">{props.name}</figcaption>
        </figure>
        <div className="testimonial__text">

            <h3 className="heading-tertiary u-margin-bottom-small">
                {props.statment}
            </h3>

            <p>
                {props.description} 
            </p>
        </div>
    </div>
</div>
  )
}

export default TestimonialCard