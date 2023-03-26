import React, { useState } from 'react';
import {Button, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Menubar from '../components/navbar/Menubar';

const Login = () => {

  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')

  const handleEmail = (e) => {
    setEmail(e.target.value)
    setEmailError ('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!email){
      setEmailError('Email requered')
    }
  }


  return (
    <div>
      <Menubar></Menubar>
      <Container>
        <h2>customer login</h2>
        <div className="main d-flex justify-content-between">
          <div
            className="registered_customer"
            style={{
            width: '48%'
          }}>
            <h3>REGISTERED CUSTOMERS</h3>
            <div className="line"></div>

            <form  onSubmit={handleSubmit}>
              <div className="field_note field">
                <p>If you have an account, sign in with your email address.</p>
              </div>

              <div className='field'>
                <label htmlFor="">Email
                  <span>*</span>
                </label>
                <input onChange={handleEmail} type="email" className='w-50'/>
                <p className='text-danger' style={{marginLeft: '25%', fontSize:'14px'}}>{emailError}</p>
              </div>

              <div className='field'>
                <label htmlFor="">Password
                  <span>*</span>
                </label>
                <input type="password" className='w-50'/>
              </div>

              <div className="field d-flex justify-content-between">
                <Button style={{
                  marginLeft: '25%'
                }} type='submit'>
                  <Link
                    to=''
                    style={{
                    textDecoration: 'none',
                    color: '#fff'
                  }}>
                    sign in
                  </Link>
                </Button>
                <span>
                  <Link
                    to=''
                    className='links'
                    style={{
                    textDecoration: 'none'
                  }}>
                    <span>Forgot Your Password?</span>
                  </Link>
                </span>
              </div>
            </form>

          </div>
          <div className="new_customer" style={{
            width: '48%'
          }}>
            <h3>NEW CUSTOMERS</h3>
            <div className="line"></div>
            <p className='field_note mb-4'>Creating an account has many benefits: check out
              faster, keep more than one address, track orders and more.</p>
            <div className="field">
              <Button>
                <Link
                  to='/registration'
                  style={{
                  textDecoration: 'none',
                  color: '#fff'
                }}>
                  <span >CREATE AN ACCOUNT</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;