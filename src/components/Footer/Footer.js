import React from 'react'
import './Footer.scss'
import img from '../../assets/img/logo-green-2x.png'

const Footer = () => {
  return (
    <section className='footer'>
      <div className="footer__logo-box">
        <img src={img} alt="Full logo" className="footer__logo"/>       
      </div>

      <div className="row">
          <div className="col-1-of-2">
            <div className="footer__navigation">
                <ul className="footer__list">
                    <li className="footer__item"><a href="/aboutus" className="footer__link">Company </a></li>
                    <li className="footer__item"><a href="/contact" className="footer__link">Contact us</a></li>
                    <li className="footer__item"><a href="/term" className="footer__link">Terms</a></li>
                </ul>
            </div>
          </div>

          <div className="col-1-of-2">
                <p className="footer__copyright">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam sint cupiditate pariatur fugiat repellendus modi perferendis dignissimos doloribus minus. Necessitatibus fuga ipsa harum unde eos quasi ad facilis atque aut?
                </p>
          </div>
      </div>  
    </section>
  )
}

export default Footer