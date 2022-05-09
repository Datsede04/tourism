import React from 'react'
import Button from '../components/Button/Button'
import SecondaryHeader from '../components/SecondaryHeader/SecondaryHeader'
import './ContactUs.scss'

const Contactus = () => {
  return (
    <div className="row">
            <div className="booking">
                 <div className="booking__form">
                     <form action="#" className="form">
                         <SecondaryHeader title="Contact Us"/>
                         <div className="form__group ">
                            <input type="text" className="form__input" id="name" placeholder="Full Name" required/>
                            <label htmlFor="name" className="form__label">Full Name</label>   
                         </div>
                         <div className="form__group">
                            <input type="email" className="form__input" id="email" placeholder="Email address" required/>
                            <label htmlFor="email" className="form__label">Email address</label>   
                         </div>
                         <div className="form__group">
                            <textarea rows={4} cols={10}  className="form__input" id="textarea" placeholder="message" required/>
                            <label htmlFor="textarea" className="form__label">Message</label>   
                         </div>

                         <Button color="btn--green" name="Send"/>
                     </form>
                 </div>
            </div> 
        </div>
  )
}



export default Contactus