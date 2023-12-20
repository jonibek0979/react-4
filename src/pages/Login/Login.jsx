import React from 'react'
import './Login.scss'
import { useNavigate } from 'react-router-dom'

function Login() {
  let user = {
    name: "ali",
    pas: 123
  }
  const nawig = useNavigate()
  function fnLogin(e) {
    e.preventDefault()
    let n = e.target.usename.value;
    let p = e.target.passwor.value;
    if (user.name == n && user.pas == p) {
      nawig('/')
      window.localStorage.setItem('token','xmdfter')
    }
    else {
      nawig('/Login')
    }
  }
  return (
    <div className='login'>
      <div className="container">
        <form onSubmit={fnLogin} className='form-control formm' action="#">
          <h1>Log in</h1>
          <input className='form-control mt-3' type="text" name="usename" id="" placeholder='name' />
          <input className='form-control mt-3' type="text" name="passwor" id="" placeholder='pasword' />
          <button type='submit' className='btn btn-danger mt-5'>Log in</button>
        </form>
      </div>
    </div>
  )
}

export default Login