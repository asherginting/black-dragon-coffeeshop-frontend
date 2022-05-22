import { Component } from 'react';
import Layout from '../layouts/Layout';
import { Card, Form, Breadcrumb } from 'react-bootstrap';
import BDButton from '../components/BDButton';
import BDInput from '../components/BDInput';
import Product from '../assets/images/promo.png';
import '../assets/scss/EditPromo.scss';

export default class InputPromo extends Component {
  render () {
    return (
      <Layout>
          <div className="container mb-5">
            <div className='d-flex flex-row justify-content-between'>
            <Breadcrumb className='nav-bread mt-5'>
              <div className='d-flex flex-row '>
                <Breadcrumb.Item>Favorite & Promo</Breadcrumb.Item>
                <Breadcrumb.Item active className='fw-bold'>Edit promo</Breadcrumb.Item>
              </div>
            </Breadcrumb>
            <div className='mt-5'>
              <a active className='fw-bold'>Cancel</a>
              </div>
            </div>
            <div className='row mt-5'>
                <div className='col-md-5 me-md-4 col-xl-5 me-xl-6'>
                    <div className='text-center'>
                    <Card style={{ width: '100%' }} className='bg-secondary'>
                    <Card.Body>
                      <img src={Product} className="img-fluid img-product rounded-circle text-center" alt="product" />
                      <Card.Title className='detail-product'>Beef Spaghetti</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">20% OFF</Card.Subtitle>
                      <Card.Text>
                      Buy 1 Choco Oreo and get 20% off for Beef Spaghetti
                      </Card.Text>
                      <Card.Text className='border-coupon'>
                      COUPON CODE
                      </Card.Text>
                      <Card.Title>FNPR15RG</Card.Title>
                      <Card.Text>
                      Valid untill October 10th 2020
                      </Card.Text>
                    </Card.Body>
                  </Card>
                    </div>
                    <div className="d-grid gap-2 mt-4">
                      <BDButton className="btn-secondary btn-product text-cream fw-bold">Take a picture</BDButton>
                      <BDButton className="btn-secondary btn-product text-cream fw-bold">Choose from gallery</BDButton>
                    </div>
                    <div className='mt-5'>
                </div>
                    <div className='mt-5'>
                    <Form.Group className="mb-3 align-items-left" controlId="formBasicEmail">
                      <Form.Label className='fw-bold'>Expired Date:</Form.Label>
                      <BDInput type="date" className="mt-3" placeholder="Select start hour"></BDInput>
                      <BDInput type="date" className="mt-2" placeholder="Select end hour"></BDInput>
                    </Form.Group>
                    <Form.Group className="mt-5 align-items-left" controlId="formBasicEmail">
                      <Form.Label className='fw-bold'>Input promo code :</Form.Label>
                      <BDInput type="text" placeholder="FNPR15RG" className="mt-3"/>
                    </Form.Group>
                    </div>
                </div>
                <div className='col-md-6 col-xl-6'>
                  <Form>
                      <Form.Group className="mb-3 text-left mt-sm-4" controlId="formBasicName">
                      <Form.Label className='fw-bold'>Name :</Form.Label>
                      <BDInput type="text" className="mt-3" placeholder="Beef Spaghetti"></BDInput>
                    </Form.Group>
                    <Form.Group className="mb-3 text-left mt-sm-4" controlId="formBasicNumber">
                      <Form.Label className='fw-bold'>Price :</Form.Label>
                      <BDInput type="number" className="mt-3" placeholder="70.000"></BDInput>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicText">
                      <Form.Label className='fw-bold'>Description :</Form.Label>
                      <BDInput type="text" className="mt-3" placeholder="Buy 1 Choco Oreo and get 20% off for Beef Spaghetti" />
                    </Form.Group>
                    <div>
                      <Form.Label className='fw-bold'>Input delivery methods :</Form.Label>
                      <div>
                        <Form.Text id="passwordHelpBlock" muted>
                        Click product size you want to use for this promo
                        </Form.Text>
                      </div>
                      <div className="mt-3">
                        <BDButton className='btn-primary btn-product-size fw-bold'>R</BDButton>
                        <BDButton className='btn-primary btn-product-size fw-bold'>L</BDButton>
                        <BDButton className='btn-primary btn-product-size fw-bold'>XL</BDButton>
                        <BDButton className='btn-secondary btn-product-size fw-bold'>250 gr</BDButton>
                        <BDButton className='btn-secondary btn-product-size fw-bold'>300 gr</BDButton>
                        <BDButton className='btn-secondary btn-product-size fw-bold'>500 gr</BDButton>
                      </div>
                    </div>
                    <div className="mt-4" >
                      <Form.Label className='fw-bold'>Input Delivery Methods:</Form.Label>
                      <div>
                        <Form.Text id="passwordHelpBlock" muted>
                        Click methods you want to use for this promo
                        </Form.Text>
                      </div>
                      <div className="mt-3">
                        <BDButton className="btn-secondary btn-delivery text-gray">Home Delivery</BDButton>
                        <BDButton className="btn-secondary btn-delivery text-gray">Dine in</BDButton>
                        <BDButton className="btn-primary btn-delivery text-gray">Take Away</BDButton>
                      </div>
                      <Form.Group className="mt-3" controlId="formBasicText">
                      <Form.Label className='fw-bold'>Enter the discount :</Form.Label>
                      <BDInput type="text" className="mt-3" placeholder="20%" />
                      </Form.Group>
                    </div>
                    <div className="d-grid gap-2 mt-5">
                      <BDButton className="btn-secondary btn-product text-cream fw-bold">Save Change</BDButton>
                    </div>
                  </Form>
                </div>
            </div>
          </div>
      </Layout>
    );
  }
}
