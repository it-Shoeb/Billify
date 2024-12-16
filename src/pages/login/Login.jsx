import React from 'react'
import {Link} from 'react-router-dom'
import './login.css'

export default function Login() {
  return (
    <>
        <div className="login">
            <div className="login-container">
                <div className="login-container-lhs">
                    <div className="login-container-lhs-image"></div>
                </div>
                <div className="login-container-rhs">
                    <form action="#" className="login-container-rhs-form">
                        <h1>Billing Bolt</h1>

                        <label htmlFor="">
                        Username or email:
                            <input type="text" name="" placeholder='Username or Email' id="" />
                        </label>
                        <label htmlFor="">
                        Password:
                            <input type="password" name="" id="" placeholder='Password' />
                        </label>
                            <a href="">Forget Password?</a>
                            <Link to={'/overview'} className='login-container-rhs-submit'>
                                <input type="submit" value="Sign In" />
                            </Link>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}
