import React from 'react'
import './Stories.scss'
import img1 from '../../../assets/awatar/Stories1 (2).png'
import img2 from '../../../assets/awatar/Stories2.png'
import img3 from '../../../assets/awatar/Stories3.png'

function Stories() {
    return (
        <div className='Stories'>
            <div className="container">
                <h2>
                    Delivering real results for top companies. Some of our <span>success stories</span>.
                </h2>
                <ul>
                    <li>
                        <p>
                            “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”
                        </p>
                        <h4>
                            Kady Baker
                        </h4>
                        <i>
                            Product Manager at Bookmark
                        </i>
                        <img className='Stories__img2' src={img1} alt="" />
                    </li>
                    <li>
                        <p>
                        “We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”
                        </p>
                        <h4>
                        Aiysha Reese
                        </h4>
                        <i>
                        Founder of Manage
                        </i>
                        <img className='Stories__img2' src={img2} alt="" />
                    </li>
                    <li>
                        <p>
                        “Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”
                        </p>
                        <h4>
                        Arthur Clarke
                        </h4>
                        <i>
                        Co-founder of MyPhysio
                        </i>
                        <img className='Stories__img2' src={img3} alt="" />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Stories