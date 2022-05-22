import { useEffect, useState } from 'react';
import { Container, FormControl, Image, InputGroup, Nav } from 'react-bootstrap';
import { HiOutlineChatAlt2 } from 'react-icons/hi';
import { RiSearchLine } from 'react-icons/ri';
import Navbar from 'react-bootstrap/Navbar';
import BDButton from './BDButton';

import logo from '../assets/img/logo.svg';
import profilePlaceholder from '../assets/img/profile-pict-placeholder.png';

import '../assets/scss/BDNavbar.scss';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function BDNavbar () {
  const { auth } = useSelector(state => state);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (auth.token) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [auth.results]);

  useEffect(() => {
    // console.log('auth', auth);
  }, []);

  return (
    <Navbar className='bd-navbar py-3 py-lg-4' fixed='top' collapseOnSelect expand="lg" bg="white" variant="light">
      <Container>
        <Navbar.Brand className='d-flex align-items-center'>
          <Link to='/'>
          <img src={logo} height={33} alt="" />
          </Link>
          <h1 className='d-none d-md-block fs-5 fw-bolder text-dark m-0 ms-4'>Black Dragon Coffee</h1>
        </Navbar.Brand>
        <Navbar.Toggle className='border-0 box-focus-shadow-none' aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="bd-nav-link ms-auto me-lg-5 mb-3 mb-lg-0">
            <NavLink className={(navData) => navData.isActive ? 'active nav-link text-secondary fw-bold me-lg-2' : 'nav-link fw-bold me-lg-2' } to='/'>Home</NavLink>
            <NavLink className={(navData) => navData.isActive ? 'active nav-link text-secondary fw-bold mx-lg-2' : 'nav-link fw-bold mx-lg-2'} to='/products'>Product</NavLink>
            <NavLink className={(navData) => navData.isActive ? 'active nav-link text-secondary fw-bold mx-lg-2' : 'nav-link fw-bold mx-lg-2'} to='/payment'>Your Cart</NavLink>
            <NavLink className={(navData) => navData.isActive ? 'active nav-link text-secondary fw-bold mx-lg-2' : 'nav-link fw-bold mx-lg-2'} to='/histories'>History</NavLink>
          </Nav>
          {
            isLogin
              ? (
              <Nav className='logged-wrapper'>
                <Nav className='flex-row'>
                  <div className="chat-notif position-relative">
                    <Link to='/chat'>
                    <HiOutlineChatAlt2 className='chat-icon text-primary me-3' />
                    </Link>
                    <span className="chat-notif-icon position-absolute translate-middle p-2 bg-secondary border border-light rounded-circle">
                      <span className="visually-hidden">New alerts</span>
                    </span>
                  </div>
                  <Link to='/profile'>
                  <Image src={profilePlaceholder} roundedCircle={true} height={33} alt="" />
                  </Link>
                </Nav>
                <div className="input-wrapper position-relative mt-3 mt-lg-0 me-lg-5">
                  <RiSearchLine className="search-icon position-absolute" />
                  <InputGroup className="">
                    <FormControl
                      aria-label="Example text with button addon"
                      aria-describedby="basic-addon1"
                      placeholder="Search"
                      className="rounded-pill ps-4"
                    />
                  </InputGroup>
                </div>
              </Nav>
                )
              : (
          <Nav className='auth-btn-group'>
            <Link to='/login'>
            <BDButton className='rounded-pill btn-secondary text-cream my-3 ms-lg-5 me-lg-3 my-lg-0 px-lg-5 py-2'>Login</BDButton>
            </Link>
            <Link to='/signup'>
            <BDButton className='rounded-pill text-cream px-lg-5 py-2'>Sign Up</BDButton>
            </Link>
          </Nav>
                )
          }

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
