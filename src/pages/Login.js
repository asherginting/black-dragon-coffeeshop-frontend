// import React from 'react';
import '../assets/css/login-page.css';
import logo from '../assets/images/logo.png';
import Button from '../components/Button';
import Input from '../components/Input';
import google from '../assets/images/google.png';
import Layout from '../layouts/Layout';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Layout notUseNavbar={true}>
      <div className='login-page'>
        <section>
          <div className='row'>
            <div className='col-12 col-lg-6 background-section'></div>
            <div className='col-12 col-lg-6 px-5 top-section'>
              <div className='my-5 d-flex flex-row justify-content-between'>
                <div className='logo'>
                  <Link to='/'>
                  <img src={logo} alt='logo' />
                  </Link>
                </div>
                <Link to='/signup'>
                <Button className='px-5'>Sign Up</Button>
                </Link>
              </div>
              <div className='text-center'>
                <h2 className='text-secondary text-center my-5'>Login</h2>
                <form className='d-flex flex-column align-items-center'>
                  <Input label='email adress' />
                  <Input label='password' cls='mt-5' />
                  <div className='text-start input-section my-3'>
                    <Link to='/forgot'>
                    <a>Forgot Password?</a>
                    </Link>
                  </div>
                  <button className='btn btn-primary btn-full my-3'>Login</button>
                  <button className='btn btn-secondary btn-full'><img src={google} alt='google' className='pe-1' /> Login With Google</button>
                  {/* <Button className='' >Login</Button>
                  <Button className=''>Login with Google</Button> */}
                </form>
              </div>

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
        </section>
      </div>
    </Layout>
  );
};

export default Login;
