import React from 'react'
import  './Form.scss'
import img1 from '../../../../assets/img/Main__img1 (1).svg'
import img2 from '../../../../assets/img/Main__img1 (2).png'
import img3 from '../../../../assets/img/Main__img1 (1).png'
function Form() {
  return (
    <div className='Form'>
        <div className="container form__inner">
            <div className="search">
                <h1>Contact</h1>
                <h3>Ask us about</h3>
                <ul>
                    <li>
                        <img src={img1} alt="" />
                        <span>
                            <h5>The quality of our talent network</h5>
                        </span>
                    </li>
                    <li>
                        <img src={img2} alt="" />
                        <span>
                            <h5>Usage & implementation of our software</h5>
                        </span>
                    </li>
                    <li>
                        <img src={img3} alt="" />
                        <span>
                            <h5>How we help drive innovation</h5>
                        </span>
                    </li>
                </ul>
            </div>
            <div className="form">
                <form action="#">
                    <input type="text" placeholder='John Appleseed'/>
                    <input type="text" placeholder='Email Address'/>
                    <input type="text" placeholder='Company Name'/>
                    <input type="text" placeholder='Title'/>
                    <input type="text" placeholder='Message'/>
                    <button>submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Form