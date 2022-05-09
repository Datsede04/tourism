import React from 'react'
import SecondaryHeader from '../SecondaryHeader/SecondaryHeader'
import Button from '../Button/Button'
import './Booking.scss'

const Booking = () => {
  return (
    <section className="section-booking" id='section-booking'>
       <div className="row">
            <div className="booking">
                 <div className="booking__form">
                     <form action="#" className="form">
                         <SecondaryHeader title="Booking Now!"/>
                         <div className="form__group ">
                            <input type="text" className="form__input" id="name" placeholder="Full Name" required/>
                            <label htmlFor="name" className="form__label">Full Name</label>   
                         </div>
                         <div className="form__group">
                            <input type="email" className="form__input" id="email" placeholder="Email address" required/>
                            <label htmlFor="email" className="form__label">Email address</label>   
                         </div>

                         <div className="form__group u-margin-bottom-medium">
                           <div className="form__radio-group">
                            <input type="radio" class="form__radio-input" id="small" name="size"/>
                            <label htmlFor="small" className="form__radio-label">
                               <span className="form__radio-button"></span>  
                               Small tour group
                            </label> 
                           </div>                        
                          
                           <div className="form__radio-group">
                            <input type="radio" class="form__radio-input" id="large" name="size"/>
                            <label htmlFor="large" className="form__radio-label">
                              <span className="form__radio-button"></span>  
                              Large tour group
                            </label> 
                           </div>                        
                         </div>
                         <Button color="btn--green" name="Let us do it"/>
                     </form>
                 </div>
            </div> 
        </div>
    </section>
  )
}

export default Booking