import React from 'react'
import "./Registorpage.css"


const Registorpage = () => {
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo" > Usama Social </h3>
                <span className="logoDesp">
                     Connect with Friends and the Whole World on Usama Social 
                    </span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input type="Email" className='loginInput'  placeholder='Email' />
                    <input type="password" className='loginInput'  placeholder='password' />
                    <button className='loginButton'> Sign Up </button>
                    <button className="loginCreateaccount"> Loginto Your Account </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Registorpage