import React from 'react'
import './register.scss'

const Register = () => {
    return (
        <div className='register'>
            <div className="top">
                <div className="wrapper">
                    <img
                        className='logo'
                        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="netflix logo"
                    />
                    <button className='loginButton'> Sign In</button>
                </div>
                </div>
                <div className="container">
                    <h1> Unlimited shows and movies</h1>
                    <h2>Watch anywher. Cancle any time </h2>
                    <p>
                        ready to watch. enter your email to create or restart your membership
                    </p>
                    <div className="input">
                        <input type="email" placeholder='email address' />
                        <button className='regiterButton'>Get Started </button>
                    </div>
                </div>
            </div>
            )
}

            export default Register
