
import React from 'react'
import logo from '../../assets/svg/myteam 2.svg'
import { Link } from 'react-router-dom'
import './Header.scss'



function Header() {
  return (
    <header>
  <div className="container header__wrapper">
  <a className='header__logo' href="#">
            <img src={logo} alt="" />
        </a>
        <ul className="header__list ">
            <li className="header__item">
                <Link to="/">Home</Link>
            </li>
            <li className="header__item">
            <Link to="/about">About</Link>
            
            </li>
           
            <li className="header__item">
            <Link to="/contact">Contact</Link>
            </li>

            <li className="header__item">
            <Link to="/login">Login</Link>
            </li>
        </ul>
  </div>
    </header>
  )
}

export default Header
