import {useState} from 'react';
import {Button, Container, Form} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Menubar from '../components/navbar/Menubar';
import {AiFillEyeInvisible, AiFillEye} from 'react-icons/ai';

const Registration = () => {
  // first name validation start
  const [firstName,
    setFirstName] = useState('')
  const [firstNameError,
    setFirstNameError] = useState('')

  const handleFirstName = (e) => {
    setFirstName(e.target.value)
    setFirstNameError('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!firstName) {
      setFirstNameError('Please input first name')
    }
    if (!lastName) {
      setLastNameError('Please input last name')
    }
    if (!email) {
      setEmailError('Email requered')
    }
    if (!checkBox) {
      setCheckBoxError('Please check the box')
    }
  }
  // first name validation end last name validation start
  const [lastName,
    setLastName] = useState('')
  const [lastNameError,
    setLastNameError] = useState('')

  const handleLastName = (e) => {
    setLastName(e.target.value)
    setLastNameError('')
  }
  // last name validation end email name validation start
  const [email,
    setEmail] = useState('')
  const [emailError,
    setEmailError] = useState('')

  const handleEmail = (e) => {
    setEmail(e.target.value)
    setEmailError('')
  }
  // email name validation end email name validation start
  const [checkBox,
    setCheckBox] = useState('')
  const [checkBoxError,
    setCheckBoxError] = useState('')

  const handleCheckBox = (e) => {
    setCheckBox(e.target.value)
    setCheckBoxError('')
  }
  // email name validation end

  const [showPassword,
    setShowPassword] = useState('password')

  const handleShowPassword = () => {
    if (showPassword === 'password') {
      setShowPassword('text')
    } else {
      setShowPassword('password')
    }
  }

  return (
    <div>
      <Menubar></Menubar>
      <Container>
        <h2>CREATE NEW CUSTOMER ACCOUNT</h2>
        <Form onSubmit={handleSubmit}>
          <div className="main d-flex justify-content-between">
            <div
              className="registered_customer"
              style={{
              width: '48%'
            }}>
              <h3>PERSONAL INFORMATION</h3>

              <fieldset style={{
                marginBottom: '29px'
              }}>
                <div className='field'>
                  <label htmlFor="">First Name
                    <span>*</span>
                  </label>
                  <input
                    onChange={handleFirstName}
                    type="text"
                    className={`${firstNameError && 'border-danger'} w-50`}/>
                  <p
                    className='text-danger'
                    style={{
                    marginLeft: '25%',
                    fontSize: '14px'
                  }}>{firstNameError}</p>
                </div>

                <div className='field'>
                  <label htmlFor="">Last Name
                    <span>*</span>
                  </label>
                  <input
                    onChange={handleLastName}
                    type="text"
                    className={`${lastNameError && 'border-danger'} w-50`}/>
                  <p
                    className='text-danger'
                    style={{
                    marginLeft: '25%',
                    fontSize: '14px'
                  }}>{lastNameError}</p>
                </div>

                <div className="newslatter field">
                  <label>Sign Up for Newsletter</label>
                  <input
                    onClick={handleCheckBox}
                    type="checkbox"
                    className={`${checkBoxError && 'check_box'}`}></input>
                  <p
                    className='text-danger d-inline'
                    style={{
                    marginLeft: '3px',
                    fontSize: '14px'
                  }}>{checkBoxError}</p>
                </div>
              </fieldset>

              <span className='field field_top'>
                <Link
                  to='/login'
                  className='links'
                  style={{
                  textDecoration: 'none'
                }}>
                  <span>Back</span>
                </Link>
              </span>
            </div>

            <div
              className="new_customer"
              style={{
              width: '48%'
            }}>
              <h3>SIGN-IN INFORMATION</h3>
              <fieldset>
                <div className='field'>
                  <label htmlFor="">Email
                    <span>*</span>
                  </label>
                  <input
                    onChange={handleEmail}
                    type="email"
                    className={`${emailError && 'border-danger'} w-75`}/>
                  <p
                    className='text-danger'
                    style={{
                    marginLeft: '25%',
                    fontSize: '14px'
                  }}>{emailError}</p>
                </div>

                <div className='field'>
                  <div className='position-relative new_pass'>
                    <div className=' d-inline'>
                      <label htmlFor="">Password
                        <span>*</span>
                      </label>
                      <div
                        onClick={handleShowPassword}
                        className=' position-absolute top-50 translate-middle'
                        style={{
                        right: '5px'
                      }}>
                        {showPassword === 'password'
                          ?
                          <AiFillEye></AiFillEye>
                          :
                          <AiFillEyeInvisible></AiFillEyeInvisible>
                        }
                      </div>
                      <input type={showPassword} className='w-75'/>
                    </div>
                  </div>

                  <div
                    className="password_strength_meter w-75"
                    style={{
                    marginLeft: '25%'
                  }}>
                    Password Strength:
                    <span className='password_strength_meter meter_label'>No Password</span>
                  </div>
                </div>

                <div className='field'>
                  <label htmlFor="">Confirm Password
                    <span>*</span>
                  </label>
                  <input type="password" className='w-75'/>
                </div>
              </fieldset>

              <div className="field field_top d-flex justify-content-end">
                <Button type="submit">
                  <Link
                    to=''
                    style={{
                    textDecoration: 'none',
                    color: '#fff'
                  }}>
                    CREATE AN ACCOUNT
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default Registration;