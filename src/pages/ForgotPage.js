// import React from 'react';
import qs from 'qs';
import Layout from '../layouts/Layout';
import '../assets/css/forgot-page.css';
import { useState } from 'react';
import http from '../helpers/http';
import { Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const ForgotPage = () => {
  const navigate = useNavigate();
  const [forgotData, setForgotData] = useState({
    email: '',
    code: '',
    password: '',
    confirmPassword: ''
  });
  const [codeSended, setCodeSended] = useState(false);
  const [loading, setLoading] = useState(false);

  const changeHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setForgotData({
      ...forgotData,
      [name]: value
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    sendResetData(forgotData);
  };

  const sendResetData = async (data) => {
    try {
      setLoading(true);
      const dataToSend = data;

      for (const key in dataToSend) {
        if (!data[key]) {
          delete data[key];
        }
      }

      if (forgotData.password !== forgotData.confirmPassword) {
        setLoading(false);
        Swal.fire(
          'Error',
          'Password and confirm password must be the same',
          'error'
        );
        return 0;
      }

      const param = qs.stringify(dataToSend);
      console.log(param);
      const res = await http().post('/auth/verify-reset', param);
      console.log(res);
      if (res.status < 400) {
        setLoading(false);
        const inputEmail = document.querySelector('input[name="email"]');

        if (inputEmail) {
          inputEmail.value = '';
        }

        // alert(res.data.message);
        Swal.fire(
          'Success',
          res.data.message,
          'success'
        );
        setCodeSended(true);

        if (forgotData.code) {
          navigate('/login');
        }
      }
    } catch (error) {
      console.log(error.response.data.message);
      // alert(error.response.data.message);
      Swal.fire(
        'Error',
        error.response.data.message,
        'error'
      );
      setLoading(false);
    }
  };

  return (
    <>
      <Layout notUseNavbar={true}>
        <section className="header-forgot">
          <div className="header-content">
            <div className="container">
              <div className="row justify-content-center">
                <div className="row">
                  <div className="col">
                    <h1 className="heading">Forgot your password?</h1>
                    <h3 className="heading">Don’t worry, we got your back!</h3>
                    <form onSubmit={submitHandler}>
                      <div className={`row justify-content-center ${codeSended ? 'flex-column align-items-center' : ''} `}>
                        <div className="col-md-6 mb-3">
                          {
                            !codeSended
                              ? <input
                                placeholder={`${codeSended ? 'Enter code here' : 'Enter your email'}`}
                                name="email"
                                type="email"
                                value={forgotData.email}
                                onChange={changeHandler}
                                className="forgotemail w-100 text-start"
                              />

                              : (
                                <>
                                <input
                                  placeholder={`${codeSended ? 'Enter code here' : 'Enter your email'}`}
                                  name="code"
                                  type="text"
                                  value={forgotData.code}
                                  onChange={changeHandler}
                                  className="forgotemail w-100 text-start"
                                />
                                <input
                                  placeholder="Enter your new password"
                                  name="password"
                                  type="password"
                                  onChange={changeHandler}
                                  className="forgotemail w-100 text-start"
                                />
                                <input
                                  placeholder="Enter confirm password"
                                  name="confirmPassword"
                                  type="password"
                                  onChange={changeHandler}
                                  className="forgotemail w-100 text-start"
                                />
                              </>
                                )
                          }
                        </div>
                        <div className={` ${!codeSended ? 'col-md-2 mb-3' : 'col-md-6 mb-3'} `}>
                          <button className="btn btn-primary send w-100">
                            {
                              !loading && (
                                <>
                                  {
                                    codeSended ? 'Reset password' : 'Send code'
                                  }
                                </>
                              )
                            }
                            {
                              loading && <Spinner animation="border" variant="secondary" />
                            }
                          </button>
                        </div>
                      </div>
                      <div className="row justify-content-center mt-5">
                        <div className="col">
                          <p className="text">
                            Click here if you didn’t receive any link <br /> in
                            2 minutes
                          </p>
                        </div>
                      </div>
                      <div className="row justify-content-center">
                        <div className="col-md-3">
                          <button className="btn btn-primary send w-100">
                            Resend Code
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default ForgotPage;
