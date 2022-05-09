import React from 'react'
import "./Navigation.scss"

const Navigation = () => {
  const refresh = ()=>{
    window.location.reload(true);
  }

  return (
    <section className="navigation">
        <input type="checkbox" className="navigation__checkbox" id="navi-toggle"/>

        <label htmlFor="navi-toggle" className="navigation__button">
            <span className="navigation__icon"> </span>
        </label>

        <div className="navigation__background"></div>

        <nav className="navigation__nav">
            <ul className="navigation__list" onClick={refresh}>
                <li className="navigation__item"><a href="/#section-about" className="navigation__link">About Us</a></li>
                <li className="navigation__item"><a href="/#section-features" className="navigation__link">Your Benefit</a></li>
                <li className="navigation__item"><a href="/#section-tour" className="navigation__link">Topular Tour</a></li>
                <li className="navigation__item"><a href="/#section-testimonial" className="navigation__link">Testimonials</a></li>
                <li className="navigation__item"><a href="/#section-booking" className="navigation__link">Book now</a></li>
            </ul>
        </nav>
    </section>
  )
}

export default Navigation