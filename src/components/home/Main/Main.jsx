import React from 'react'
import './Main.scss'
import img1 from '../../../assets/img/Main__img1 (1).svg'
import img2 from '../../../assets/img/Main__img1 (2).png'
import img3 from '../../../assets/img/Main__img1 (1).png'

function Main() {
    return (
        <main className='Main'>
            <div className="container Main__flex">
                <div className="build">
                    <hr />
                    <h2>
                        Build & manage distributed teams like no one else.
                    </h2>
                </div>
                <ul>
                    <li>
                        <img src={img1} alt="" />
                        <span>
                            <h5>Experienced Individuals</h5>
                            <p>Our network is made up of highly experienced professionals who are passionate about what they do.</p>
                        </span>
                    </li>
                    <li>
                        <img src={img2} alt="" />
                        <span>
                            <h5>Easy to Implement</h5>
                            <p>Our processes have been refined over years of implementation meaning our teams always deliver.</p>
                        </span>
                    </li>
                    <li>
                        <img src={img3} alt="" />
                        <span>
                            <h5>Enhanced Productivity</h5>
                            <p>Our customized platform with in-built analytics helps you manage your distributed teams.</p>
                        </span>
                    </li>
                </ul>
            </div>
        </main>
    )
}

export default Main