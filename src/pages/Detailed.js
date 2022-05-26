import React from 'react'
import "./Detailed.scss"

import img1 from '../assets/img/nat-1.jpg'
import img2 from '../assets/img/nat-2.jpg'
import img3 from '../assets/img/nat-3.jpg'
import SecondaryHeader from '../components/SecondaryHeader/SecondaryHeader'
import Vmp4 from "../assets/img/video.mp4"
import Vwebm from "../assets/img/video.webm"
import Button from '../components/Button/Button'

const Detailed = () => {
  return (
    <>
    <div className="row">
        <SecondaryHeader title="Hicking Adventure"/>
        <div className='paragraph'>

        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur ullam fugiat aperiam illum obcaecati molestias totam assumenda consectetur odio quasi! Debitis similique voluptas officia? Quasi officia consectetur reiciendis voluptas molestias.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. A omnis, distinctio harum minus tempora laudantium cum fugiat non eius quia numquam voluptate iste debitis fuga quibusdam rerum maxime modi velit!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat facilis illum veniam reiciendis molestiae. Quas commodi ipsam asperiores quos officia. Nemo excepturi quia quis blanditiis tempore eum voluptate sit quidem.
        </div>
    </div>
    
    <div className="row">
     

        <div className="col-1-of-2">
        <div className= "">
            <video className="bg-video__content" autoPlay muted loop>
                <source src={Vmp4} type="video/mp4"/>
                <source src={Vwebm} type="video/webm"/>
                Your Browser is not supported!
            </video>
        </div>             
        </div>

        <div className="col-1-of-2">
        <div className="composition">
            <img src={img1} alt="nature picture" className="composition__photo composition__photo--p1" />
            <img src={img2} alt="nature picture" className="composition__photo composition__photo--p2" />
            <img src={img3} alt="nature picture" className="composition__photo composition__photo--p3" />
            </div>
        </div>
    </div>

     <div className="u-margin-bottom-medium u-center-text">
          <Button color="btn--green" name="book now"></Button>     
    </div>
    </>  
  )
}

export default Detailed