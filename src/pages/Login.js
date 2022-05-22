// import React from 'react';
import '../assets/css/login-page.css';
import logo from '../assets/images/logo.png';
import Button from '../components/Button';
import Input from '../components/Input';
import google from '../assets/images/google.png';
import Layout from '../layouts/Layout';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { login } from '../redux/actions/auth';

const Login = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector(state => state);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (auth.results.token) {
      navigate('/');
    }
  }, [auth]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    dispatch(login(email, password));
  };

  return (
    <Layout notUseNavbar={true}>
    <div className='login-page'>
      <section>
        <div className='row'>
          <div className='col-12 col-lg-6 background-section'></div>
          <div className='col-12 col-lg-6 px-5 top-section'>
            <div className='my-5 d-flex flex-row justify-content-between'>
              <div style={{ cursor: 'pointer' }} onClick={() => navigate('/')} className='logo'>
                <img src={logo} alt='logo' />
              </div>
              <Button onClick={() => navigate('/signup')} className='px-5'>Sign Up</Button>
            </div>
            <div className='text-center'>
              <h2 className='text-secondary text-center my-5'>Login</h2>
              <form onSubmit={handleSubmit} className='d-flex flex-column align-items-center'>
              {auth.isError && auth.errorMessage && <div style={{ backgroundColor: 'teal' }} className='alert' role='alert'>{auth.errorMessage}</div>}
                <Input label='email adress' idInput='email' type='email' />
                <Input label='password' cls='mt-5' idInput='password' type='password' />
                <div className='text-start input-section my-3'>
                  <Link to='/forgot'>Forgot Password?</Link>
                </div>
                <button type='submit' className='btn btn-primary btn-full my-3'>Login</button>
                <button className='btn btn-secondary btn-full'><img src={google} alt='google' className='pe-1' /> Login With Google</button>
              </form>
            </div>

          </div>
          <div className='badge w-75 mx-auto d-flex justify-content-center bg-white position-relative'>
            <div className='d-flex justify-content-between align-items-center w-100 card-bottom'>
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
    </Layout>
  );
};

export default Login;
