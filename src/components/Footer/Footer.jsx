import React, { useState } from 'react'
import  './Footer.scss'
import logo from '../../assets/svg/myteam 2.svg'
import img1 from '../../assets/svg/Facebook-logo.png'
import img2 from '../../assets/svg/D.jpg'
import img3 from '../../assets/svg/twitter.webp'
import { Link } from 'react-router-dom'

function Footer() {
    
  return (
    <footer>
        <div className="container footer__inner">
            <div className="footer__nav">
                <img src={logo} alt="" />
                <span>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                </span>
            </div>
            <p className='footer__info'>
            987 Hillcrest LaneIrvine, CACalifornia 92714Call Us : 949-833-7432
            </p>
            <div className="footer__social">
                <span>
                    <a href="https://www.facebook.com/campaign/landing.php?campaign_id=11554070363&extra_1=s%7Cc%7C477437435741%7Ce%7Cfecabook%7C&placement=&creative=477437435741&keyword=fecabook&partner_id=googlesem&extra_2=campaignid%3D11554070363%26adgroupid%3D112923417056%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-298448022716%26loc_physical_ms%3D1028523%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAiA1fqrBhA1EiwAMU5m_5lXOmQLbyKAV6qnYyWwlt_1ib6-pdoOXUS0SZTwHYKkezoRLq2b7RoC6fkQAvD_BwE" target='_blank'>
                        <img className='img1'  src={img1} alt="" />
                        
                    </a>
                    <a href="https://www.dw.com/ru/%D1%82%D0%B5%D0%BC%D1%8B-%D0%B4%D0%BD%D1%8F/s-9119" target='_blank'>
                        <img className='img2' src={img2} alt="" />
                        
                    </a>
                    <a href="https://twitter.com/?lang=ru" target='_blank'>
                        <img className='img3' src={img3} alt="" />
                        
                    </a>
                </span>
                <p>
                Copyright 2020. All Rights Reserved
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer