import React from 'react'
import './Some.scss'
import imgsome from '../../../assets/fonts/some__img.png'

function Some() {
  return (
   <div className="some">
    <div className="container">
        <h2>Some of our clients</h2>
        <img src={imgsome} alt="" />
    </div>
   </div>
  )
}

export default Some