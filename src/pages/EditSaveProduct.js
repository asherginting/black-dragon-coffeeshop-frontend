// import React from 'react';
import '../assets/scss/editsaveproduct.scss';
import imgProduct from '../assets/images/edit-product.png';
import { FaRegTrashAlt } from 'react-icons/fa';

import Layout from '../layouts/Layout';
import { Form } from 'react-bootstrap';

export default function EditSaveProduct () {
  return (
    <Layout>
      <section className="edit-save-product-page container">
        <div className='route my-5'>
          <ul className='list-group d-flex flex-row'>
            <li><a href='#' className='me-1'>Favorite & Promo &#62; </a></li>
            <li><a href='#' className='me-1 fw-bold text-secondary'> Cold Brew &#62; </a></li>
            <li><a href='#' className='fw-bold text-secondary'> Edit Product</a></li>
          </ul>
        </div>
        <div className='row'>
          <div className='col-12 col-lg-5 left-section position-relative left-dekstop' style={{ backgroundImage: `url(${imgProduct})` }}>
            <button className='btn bg-white btn-delete position-absolute d-flex align-items-center justify-content-center'><FaRegTrashAlt className='fw-bold' /></button>
          </div>
          <div className='left-mobile'>
            <div>
              <img className='product-image' src={imgProduct} alt='product'/>
            </div>
            <button className='btn-primary btn my-4 py-3'>Delete</button>
          </div>
          <div className='col-12 col-lg-6'>
            <h1>COLD BREW</h1>
            <hr />
            <div className='fs-2'>IDR 30.000</div>
            <hr/>
            <div>
              <p>Cold brewing is a method of brewing that combines ground coffee and cool water and uses time instead of heat to extract the flavor. It is brewed in small batches and steeped for as long as 48 hours.</p>
            </div>
            <hr/>
            <Form.Select className='py-3 mt-5' aria-label="Select option size">
              <option className='d-none'>Select size</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <Form.Select className='py-3 mt-4' aria-label="Select delivery">
              <option className='d-none'>Select delivery method</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <div className='d-flex mt-4 count-cart'>
              <div className='border counter-section py-3 d-flex flex-row align-items-center justify-content-between'>
                <button className='btn increment px-4'>+</button>
                <span className='count fw-bold text-dark'>2</span>
                <button className='btn decrement px-4'>-</button>
              </div>
              <button className='btn-add btn btn-secondary btn-section mt-3 mt-sm-0 py-3 fw-bold'>Add to Cart</button>
            </div>
          </div>
        </div>
        <div className='row mt-4 mb-5'>
          <div className='col-12 col-lg-5 left-section'>
            <div>Delivery only on <span className='fw-bold'>Monday to <br/> Friday</span> at <span className='fw-bold'>1-7 pm</span></div>
          </div>
          <div className='col-12 col-lg-6 right-section'>
            <button className='w-100 btn btn-primary btn-section mt-3 mt-sm-0 py-3 fw-bold'>Save change</button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
