import React from 'react'
import './Meet.scss'
import meet1 from '../../../assets/awatar/Meet1.png'
import meet5 from '../../../assets/awatar/meet5.png'
import meet4 from '../../../assets/awatar/meet4.png'
import meet3 from '../../../assets/awatar/meet3.png'
import meet2 from '../../../assets/awatar/meet2.png'
import img3 from '../../../assets/svg/twitter.webp'
import img2 from '../../../assets/svg/in.png'
let elBtn = document.querySelector('.btnn')

function Meet() {
    function fn() {
        elBtn.classList.add('addd')
    }
    return (
        <div className='Meet'>
            <div className="container">
                <h1>Meet the directors</h1>
                <ul className="meet__list">
                <li className="meet__item">
                        <div className="item__div">
                            <img src={meet1} alt="" />
                            <h4>Nikita Marks</h4>
                            <i>Founder & CEO</i>
                        </div>
                        <button>+</button>
                        {/* <div className="add">
                            <h4>Aden Allan</h4>
                            <p>
                                “Empowered teams create truly amazing products. Set the north star and let them follow it.”
                            </p>
                            <span>
                                <a href="https://twitter.com/?lang=ru" target='_blank'>
                                    <img className="img1" src={img3} alt="" />

                                </a>
                                <a href="https://www.pngwing.com/en/search?q=linkedin" target='_blank'>
                                    <img className="img2" src={img2} alt="" />

                                </a>
                            </span>
                            <button className='btn'>+</button>
                        </div> */}
                    </li>                    <li className="meet__item">
                        <div className="item__div">
                            <img src={meet2} alt="" />
                            <h4>Cristian Duncan</h4>
                            <i>Co-founder & COO</i>
                        </div>
                        <button>+</button>
                        {/* <div className="add">
                            <h4>Aden Allan</h4>
                            <p>
                                “Empowered teams create truly amazing products. Set the north star and let them follow it.”
                            </p>
                            <span>
                                <a href="https://twitter.com/?lang=ru" target='_blank'>
                                    <img className="img1" src={img3} alt="" />

                                </a>
                                <a href="https://www.pngwing.com/en/search?q=linkedin" target='_blank'>
                                    <img className="img2" src={img2} alt="" />

                                </a>
                            </span>
                            <button className='btn'>+</button>
                        </div> */}
                    </li>                    <li className="meet__item">
                        <div className="item__div">
                            <img src={meet3} alt="" />
                            <h4>Cruz Hamer</h4>
                            <i>Co-founder & CTO</i>
                        </div>
                        <button>+</button>
                        {/* <div className="add">
                            <h4>Aden Allan</h4>
                            <p>
                                “Empowered teams create truly amazing products. Set the north star and let them follow it.”
                            </p>
                            <span>
                                <a href="https://twitter.com/?lang=ru" target='_blank'>
                                    <img className="img1" src={img3} alt="" />

                                </a>
                                <a href="https://www.pngwing.com/en/search?q=linkedin" target='_blank'>
                                    <img className="img2" src={img2} alt="" />

                                </a>
                            </span>
                            <button className='btn'>+</button>
                        </div> */}
                    </li>                    <li className="meet__item">
                        <div className="item__div">
                            <img src={meet4} alt="" />
                            <h4>Drake Heaton</h4>
                            <i>Business Development Lead</i>
                        </div>
                        <button>+</button>
                        {/* <div className="add">
                            <h4>Aden Allan</h4>
                            <p>
                                “Empowered teams create truly amazing products. Set the north star and let them follow it.”
                            </p>
                            <span>
                                <a href="https://twitter.com/?lang=ru" target='_blank'>
                                    <img className="img1" src={img3} alt="" />

                                </a>
                                <a href="https://www.pngwing.com/en/search?q=linkedin" target='_blank'>
                                    <img className="img2" src={img2} alt="" />

                                </a>
                            </span>
                            <button className='btn'>+</button>
                        </div> */}
                    </li>                    <li className="meet__item">
                        <div className="item__div">
                            <img src={meet5} alt="" />
                            <h4>Griffin Wise</h4>
                            <i>Lead Marketing</i>
                        </div>
                        <button>+</button>
                        {/* <div className="add">
                            <h4>Aden Allan</h4>
                            <p>
                                “Empowered teams create truly amazing products. Set the north star and let them follow it.”
                            </p>
                            <span>
                                <a href="https://twitter.com/?lang=ru" target='_blank'>
                                    <img className="img1" src={img3} alt="" />

                                </a>
                                <a href="https://www.pngwing.com/en/search?q=linkedin" target='_blank'>
                                    <img className="img2" src={img2} alt="" />

                                </a>
                            </span>
                            <button className='btn'>+</button>
                        </div> */}
                    </li>                    <li className="meet__item">
                        <div className="item__div">
                        <img src={meet5} alt="" />
                            <h4>Griffin Wise</h4>
                            <i>Lead Marketing</i>
                        </div>
                        <button>+</button>
                        {/* <div className="add">
                            <h4>Aden Allan</h4>
                            <p>
                                “Empowered teams create truly amazing products. Set the north star and let them follow it.”
                            </p>
                            <span>
                                <a href="https://twitter.com/?lang=ru" target='_blank'>
                                    <img className="img1" src={img3} alt="" />

                                </a>
                                <a href="https://www.pngwing.com/en/search?q=linkedin" target='_blank'>
                                    <img className="img2" src={img2} alt="" />

                                </a>
                            </span>
                            <button className='btn'>+</button>
                        </div> */}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Meet