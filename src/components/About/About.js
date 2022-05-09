import React from 'react'
import './About.scss'
import img1 from '../../assets/img/nat-1.jpg'
import img2 from '../../assets/img/nat-2.jpg'
import img3 from '../../assets/img/nat-3.jpg'

const About = () => {
  return (
    <div className="section-about" id="section-about">
       <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary ">
              Exciting tours for adventurous people
          </h2>
       </div>

       <div className="row">
          <div className="col-1-of-2">
              <h3 className="heading-tertiary u-margin-bottom-small">You're going to fall in love with the nature</h3>
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, fugiat ab vitae pariatur, debitis exercitationem quia quas repudiandae omnis atque ex aperiam sed quisquam dolorem nihil qui sapiente molestiae iusto!
              </p>
        
              <h3 className="heading-tertiary u-margin-bottom-small">Live adventure like you never have before</h3>
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, fugiat ab vitae pariatur, debitis exercitationem quia quas repudiandae omnis atque ex aperiam sed quisquam dolorem nihil qui sapiente molestiae iusto!
              </p>
            
              <a href="/aboutus" className="btn-text"> Learn more ➝</a>
          </div>
          <div className="col-1-of-2">
              <div className="composition">
                  <img src={img1} alt="nature picture" className="composition__photo composition__photo--p1" />
                  <img src={img2} alt="nature picture" className="composition__photo composition__photo--p2" />
                  <img src={img3} alt="nature picture" className="composition__photo composition__photo--p3" />
              </div>
          </div>
       </div>
    </div>
  )
}

export default About