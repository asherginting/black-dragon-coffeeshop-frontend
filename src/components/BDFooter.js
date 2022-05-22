import { Col, Container, Row } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.svg';
import '../assets/scss/BDFooter.scss';

export default function BDFooter () {
  return (
    <footer className="bd-footer">
      <Container className='px-5 text-md-start'>
        <Row className='content-wrapper'>
          <Col sm={12} md={4}>
            <Row>
              <Col sm={12} md={6}>
              <h2>Product</h2>
              <ul>
                <li>Download</li>
                <li>Pricing</li>
                <li>Locations</li>
                <li>Countries</li>
                <li>Blog</li>
              </ul>
              </Col>
              <Col sm={12} md={6} className='mt-4 mt-md-0'>
              <h2 >Engage</h2>
              <ul>
                <li>Coffe Shop ?</li>
                <li>FAQ</li>
                <li>About Us</li>
                <li>Privacy Policy</li>
                <li>Term of Service</li>
              </ul>
              </Col>
            </Row>

          </Col>
          <Col className='mt-5 mt-md-0'>
            <div className="brand-title d-md-flex align-items-center">
              <Link to='/'>
              <img src={logo} height={36} className='bd-footer-logo' alt="Black-Dragon" />
              </Link>
              <h1 className='fs-5 mt-3 mt-md-0 fw-bolder m-lg-0 ms-md-3 ms-lg-3'>Black Dragon Coffeeshop</h1>
            </div>
            <p className='description mt-3 fw-bold'>
              Black Dragon Coffeeshop is a store that sells some good meals, and especially coffee. We provide high quality beans
            </p>
            <div className="social-media-icon d-flex justify-content-center justify-content-md-start mt-4">
              <div className="icon-wrapper bg-secondary rounded-circle px-2 py-1 mx-3 ms-0">
                <FaFacebookF className='fs-6' />
              </div>
              <div className="icon-wrapper bg-secondary rounded-circle px-2 py-1 mx-3">
                <FaTwitter className='fs-6' />
              </div>
              <div className="icon-wrapper bg-secondary rounded-circle px-2 py-1 mx-3 me-0">
                <FaInstagram className='fs-6' />
              </div>
            </div>
            <p className='mt-5 mt-lg-4 text-primary'>
              ©2022BlackDragonCoffeeshop
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
