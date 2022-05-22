// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
// import { Link } from 'react-router-dom';
import '../assets/css/login-page.css';
import logo from '../assets/images/logo.png';
import Button from '../components/Button';
import Input from '../components/Input';
import google from '../assets/images/google.png';
// import { signup as register } from '../redux/actions/auth';
import http from '../helpers/http';
// import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../layouts/Layout';

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [isVerify, setIsVeriry] = useState(false);
  const [emailVerify, setEmailVerify] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const { signup } = useSelector(state => state);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSignup = (e) => {
    e.preventDefault();
    setLoading(true);
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const phone = document.getElementById('phone').value;
    const param = new URLSearchParams();
    param.append('email', email);
    param.append('password', password);
    param.append('phone', phone);
    http().post('/auth/signup', param).then(res => {
      if (res.status < 400) {
        setLoading(false);
        Swal.fire(
          'Success',
          res.data.message,
          'success'
        );
        setEmailVerify(email);
        setPasswordInput(password);
        setIsVeriry(true);
      }
    }).catch(err => {
      setLoading(false);
      Swal.fire(
        'Error',
        err.response.data.message,
        'error'
      );
      setIsVeriry(false);
    });
  };

  const handleVerify = (e) => {
    e.preventDefault();
    const code = document.getElementById('code').value;
    const param = new URLSearchParams();
    param.append('email', emailVerify);
    param.append('code', code);
    param.append('password', passwordInput);
    param.append('confirmPassword', passwordInput);
    http().post('/auth/verify-reset', param).then(res => {
      if (res.status < 400) {
        Swal.fire(
          'Success',
          res.data.message,
          'success'
        );
        navigate('/login');
      }
    }).catch(err => {
      Swal.fire(
        'Error',
        err.response.data.message,
        'error'
      );
    });
  };

  return (
    <Layout notUseNavbar={true} >
    <div className='login-page'>
      <section>
        <div className='row'>
          <div className='col-12 col-lg-6 background-section'></div>
          <div className='col-12 col-lg-6 px-5 top-section'>
            <div className='my-5 d-flex flex-row justify-content-between'>
              <div style={{ cursor: 'pointer' }} onClick={() => navigate('/')} className='logo'>
                <img src={logo} alt='logo' />
              </div>
              <Button onClick={() => navigate('/login')} className='px-5'>Login</Button>
            </div>
            <div className='text-center'>
              <h2 className='text-secondary text-center my-5'>{isVerify ? 'Verify' : 'Signup'}</h2>
              <form className='d-flex flex-column align-items-center'>
                {!isVerify
                  ? <><Input label='email adress' idInput='email' type='email' />
                <Input label='password' idInput='password' type='password' cls='mt-5' />
                <Input label='phone number' idInput='phone' type='number' cls='mt-5' />
                <div className='text-start input-section my-3'>
                </div>
                {loading
                  ? <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                  : <>
                <button onClick={handleSignup} type='submit' className='btn btn-primary btn-full my-3'>Signup</button>
                <button className='btn btn-secondary btn-full'><img src={google} className='pe-1' /> Signup With Google</button>
                </>}
                </>
                  : <><Input label='code' idInput='code' type='number' />
                  <button onClick={handleVerify} className='btn btn-secondary btn-full my-5'>Verify</button></>}
              </form>
            </div>

          </div>
          <div className='badge w-75 mx-auto d-flex justify-content-center bg-white position-relative'>
            <div className='d-flex justify-content-between align-items-center w-100 card-bottom '>
              <div className='text-start'>
                <h2 >Get your member <br/> card now!</h2>
                <p className='text-muted'>Let&apos;s join with our member and enjoy the deals.</p>
              </div>
              <div className='text-end'>
                <button className='btn btn-primary px-5 py-3'>Create Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    {/* </div> */}
    </Layout>
  );
};

export default Signup;
