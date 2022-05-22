import { Component } from 'react';
import Layout from '../layouts/Layout';
import { Form, Breadcrumb } from 'react-bootstrap';
import BDButton from '../components/BDButton';
import BDInput from '../components/BDInput';
import img from '../assets/images/bg-promo.png';
import '../assets/scss/InputPromo.scss';

export default class InputPromo extends Component {
  render () {
    return (
      <Layout>
          <div className="container mb-5">
            <Breadcrumb className='nav-bread mt-5'>
                <Breadcrumb.Item>Favorite & Promo</Breadcrumb.Item>
                <Breadcrumb.Item active className='fw-bold'>Add new promo</Breadcrumb.Item>
            </Breadcrumb>
            <div className='row mt-5'>
                <div className='col-md-5 me-md-4 col-xl-5 me-xl-6'>
                    <div className='text-center'>
                      <img src={img} className="img-fluid img-product rounded-circle text-center" alt="product"/>
                    </div>
                    <div className="d-grid gap-2 mt-4">
                      <BDButton className="btn-secondary btn-product text-cream fw-bold">Take a picture</BDButton>
                      <BDButton className="btn-secondary btn-product text-cream fw-bold">Choose from gallery</BDButton>
                    </div>
                    <div className='mt-5'>
                    <Form.Group className="mb-3 align-items-left" controlId="formBasicEmail">
                      <Form.Label className='fw-bold'>Enter the discount:</Form.Label>
                      <BDInput type="date-time" className="mt-3" placeholder="Input discount"></BDInput>
                    </Form.Group>
                </div>
                    <div className='mt-5'>
                    <Form.Group className="mb-3 align-items-left" controlId="formBasicEmail">
                      <Form.Label className='fw-bold'>Expired Date:</Form.Label>
                      <BDInput type="date" className="mt-3" placeholder="Select start hour"></BDInput>
                      <BDInput type="date" className="mt-2" placeholder="Select end hour"></BDInput>
                    </Form.Group>
                    <Form.Group className="mt-5 align-items-left" controlId="formBasicEmail">
                      <Form.Label className='fw-bold'>Input Coupon Code :</Form.Label>
                      <BDInput type="text" placeholder="Input Coupon Code" className="mt-3"/>
                    </Form.Group>
                    </div>
                </div>
                <div className='col-md-6 col-xl-6'>
                  <Form>
                      <Form.Group className="mb-3 text-left mt-sm-4" controlId="formBasicName">
                      <Form.Label className='fw-bold'>Name :</Form.Label>
                      <BDInput type="text" className="mt-3" placeholder="Type promo name min. 50 characters"></BDInput>
                    </Form.Group>
                    <Form.Group className="mb-3 text-left mt-sm-4" controlId="formBasicNumber">
                      <Form.Label className='fw-bold'>Normal Price :</Form.Label>
                      <BDInput type="number" className="mt-3" placeholder="Type the normal price"></BDInput>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicText">
                      <Form.Label className='fw-bold'>Description :</Form.Label>
                      <BDInput type="text" className="mt-3" placeholder="Describe your promo min. 150 characters" />
                    </Form.Group>
                    <div>
                      <Form.Label className='fw-bold'>Input Product Size :</Form.Label>
                      <div>
                        <Form.Text id="passwordHelpBlock" muted>
                          Click product size you want to use for this promo
                        </Form.Text>
                      </div>
                      <div className="mt-3">
                        <BDButton className='btn-secondary btn-product-size fw-bold'>R</BDButton>
                        <BDButton className='btn-secondary btn-product-size fw-bold'>L</BDButton>
                        <BDButton className='btn-secondary btn-product-size fw-bold'>XL</BDButton>
                        <BDButton className='btn-primary btn-product-size fw-bold'>250 gr</BDButton>
                        <BDButton className='btn-primary btn-product-size fw-bold'>300 gr</BDButton>
                        <BDButton className='btn-primary btn-product-size fw-bold'>500 gr</BDButton>
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
                    </div>
                    <div className="d-grid gap-2 mt-5">
                      <BDButton className="btn-secondary btn-product text-cream fw-bold">Save Promo</BDButton>
                      <BDButton className="btn-primary btn-product text-cream fw-bold">Cancel</BDButton>
                    </div>
                  </Form>
                </div>
            </div>
          </div>
      </Layout>
    );
  }
}
