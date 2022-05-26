import React from 'react'
import image1 from "./partners/spacex-logo.png"
import image2 from "./partners/spacex-logo.png"
import image3 from "./partners/spacex-logo.png"
import image4 from "./partners/spacex-logo.png"
import image5 from "./partners/spacex-logo.png"
import "./Ourpartner.scss"

const Ourpartner = () => {
  return (
    <div className='ourpartners'>
            <ul className='ourpartners__pictures'>
                <li className='ourpartners__pictures-p'><img src={image1}/></li>
                <li className='ourpartners__pictures-p'><img src={image2}/></li>
                <li className='ourpartners__pictures-p'><img src={image3}/></li>
                <li className='ourpartners__pictures-p'><img src={image4}/></li>
                <li className='ourpartners__pictures-p'><img src={image5}/></li>
            </ul>
    </div>
  )
}

export default Ourpartner