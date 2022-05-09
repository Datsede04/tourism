import React from "react"
import './Header.scss'
import WhiteLogo from '../../assets/img/logo-white.png'

const Header = () => {
  return (
    <div className="header">
        <div className="header__logo-box">
            <img src={WhiteLogo} alt="log" className="header__logo"/>
        </div>

        <div className="header__text-box">
            <h1 className="headding-primary">
                <span className="headding-primary--main">Outdoors</span>
                <span className="headding-primary--sub">is where life happens</span>
            </h1>

            <a href="#section-tour" className="btn btn--white btn--animated">discover our tour</a>
        </div>
    </div>
  )
}

export default Header