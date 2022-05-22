// import React from 'react';
import Layout from '../layouts/Layout';
import '../assets/scss/paymentdetail.scss';
import defaultImage from '../assets/images/default-image.jpg';
import { FaIdCard, FaTruckMoving } from 'react-icons/fa';
import { AiFillBank } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { addHistory } from '../redux/actions/addHistory';
import { addProductHistory } from '../redux/actions/addProductHistory';
import http from '../helpers/http';

export default function PaymentDetails () {
  const { addCharts, paymentCharts, dataChart, addHistory: dataHistory } = useSelector(state => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let totalPrc = 0;

  const priceFormat = (price) => new Intl.NumberFormat('id-ID').format(price);
  const shipping = 30000;
  const dateRepair = (data) => {
    if (data < 10) data = '0' + data;
    return data;
  };

  const handlePayment = (e) => {
    e.preventDefault();
    const storage = window.localStorage.getItem('user');
    const tokenRes = JSON.parse(storage).token;
    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const time = dateRepair(today.getHours()) + ':' + dateRepair(today.getMinutes()) + ':' + dateRepair(today.getSeconds());
    const deliveryTime = date + ' ' + time;
    const subTotal = document.getElementById('subTotal').innerHTML.replace(/\./g, '');
    const total = document.getElementById('totalPrice').innerHTML.replace(/\./g, '');
    const reservationTime = date + ' ' + time;
    const shippingCost = 30000;
    const taxtId = 1;
    const deliveryMethodId = dataChart.idDelivery || 0;
    const paymentMethodId = 1;
    dispatch(addHistory(tokenRes, deliveryTime, Number(subTotal), Number(total), reservationTime, shippingCost, taxtId, deliveryMethodId, paymentMethodId));
  };

  const completePayment = (e) => {
    e.preventDefault();
    const storage = window.localStorage.getItem('user');
    const tokenRes = JSON.parse(storage).token;
    const idHistory = dataHistory.results.id;
    addCharts.results.map((data, index) => {
      return dispatch(addProductHistory(tokenRes, idHistory, data.idProduct, data.idSize, data.totalItem));
    });
    dispatch({
      type: 'EMPTY_PAYMENT_CHARTS'
    });
    dispatch({
      type: 'EMPTY_ADD_CHARTS'
    });
    navigate('/histories');
  };

  return (
    <Layout>
      <section className='payment-detail'>
        <div className='opacity'>
          <div className='container'>
            <h1 className='text-white mb-5'>Checkout your <br/> item now!</h1>
            <div className='row mb-5'>
              <div className='col-12 col-lg-6 card-left'>
                <div className='card bg-white px-5 py-4'>
                  <h2 className='text-center py-lg-5'>Order Summary</h2>
                  {paymentCharts.results && (paymentCharts.results.map((data, index) => {
                    const total = addCharts.results[index].totalItem * data.price;
                    totalPrc += total;
                    return <div key={index} className='d-flex my-2 flex-row align-items-center justify-content-between'>
                      <div className='d-flex flex-row'>
                        <div className='img-product' style={{ backgroundImage: `url(${defaultImage})` }}></div>
                        <div className='d-flex flex-column ps-3'>
                          <span>{data.name}</span>
                          <span>x {addCharts.results[index].totalItem}</span>
                          <span>Regular</span>
                        </div>
                      </div>
                      <div>IDR {priceFormat(total)}</div>
                    </div>;
                  }))}
                  <hr className='my-5'/>
                  <div className='d-flex justify-content-between'>
                    <span>SUBTOTAL</span>
                    <span>IDR <span id='subTotal'>{priceFormat(totalPrc)}</span></span>
                  </div>
                  <div className='d-flex justify-content-between'>
                    <span>TAX & FEES</span>
                    <span>IDR {priceFormat(totalPrc * (16 / 100))}</span>
                  </div>
                  <div className='d-flex justify-content-between'>
                    <span>SHIPPING</span>
                    <span>IDR {priceFormat(shipping)}</span>
                  </div>
                  <div className='fw-bold my-3 my-lg-5 fs-4 d-flex justify-content-between'>
                    <span>TOTAL</span>
                    <span>IDR <span id='totalPrice'>{priceFormat(totalPrc + (totalPrc * (16 / 100)) + shipping)}</span></span>
                  </div>
                </div>
              </div>
              <div className='col-12 col-lg-6 card-right'>
                <div className='d-flex justify-content-between text-white mt-5 mt-lg-0 mb-3 fs-3 fw-bold'>
                  <span>Address details</span>
                  <span>edit</span>
                </div>
                <form className='card bg-white px-5 py-4'>
                  <div><span className='fw-bold'>Delivery to</span> <input placeholder='Deliver to' defaultValue='Iskandar Street'/></div>
                  <hr/>
                  <div className='adress w-100'>
                    <textarea className='w-100' defaultValue='Km 5 refinery road oppsite republic road, effurun, Jakarta'/>
                  </div>
                  <hr/>
                  <div>
                    <input type='tel' defaultValue='+62 81348287878'/>
                  </div>
                </form>
                <div className='text-white mt-5 mb-3 fs-3 fw-bold'>
                  <span>Payment Methods</span>
                </div>
                <div className='card bg-white px-5 py-4'>
                  <form>
                    <div className='d-flex align-items-center'>
                      <input type='radio' className='' id='card' value='card' defaultChecked/>
                      <label className='fs-4'><span className='payment-list bg-primary px-2 py-1 mx-3'><FaIdCard/></span> Card</label>
                    </div>
                    <div className='d-flex align-items-center my-3'>
                      <input type='radio' className='' id='card' value='bank' />
                      <label className='fs-4'><span className='payment-list bg-secondary px-2 py-1 mx-3'><AiFillBank/></span> Bank account</label>
                    </div>
                    <div className='d-flex align-items-center'>
                      <input type='radio' className='' id='card' value='cod' />
                      <label className='fs-4'><span className='payment-list bg-third px-2 py-1 mx-3'><FaTruckMoving/></span> Cash on delivery</label>
                    </div>
                  </form>
                </div>
                <button onClick={handlePayment} className='btn btn-secondary fw-bold w-100 py-4 mt-5' data-bs-toggle="modal" data-bs-target="#exampleModal">Confirm and Pay</button>
                {addHistory.isLoading
                  ? <div className="spinner-border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  : <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          {paymentCharts.results.length === 0 || dataChart.isError
                            ? <h5 className="modal-title" id="exampleModalLabel">Ups something went wrong</h5>
                            : <h5 className="modal-title" id="exampleModalLabel">Confirmation</h5>
                          }
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                          {paymentCharts.results.length === 0 || dataChart.isError ? 'Some data is empty' : 'Complete your Payment'}
                        </div>
                        <div className="modal-footer">
                          {paymentCharts.results.length === 0 || dataChart.isError
                            ? <button type="button" className="btn btn-primary" data-bs-dismiss="modal">OK</button>
                            : <><button type="button" className="btn btn-primary" data-bs-dismiss="modal">Cancel</button>
                            <button onClick={completePayment} type="button" className="btn btn-secondary px-5" data-bs-dismiss="modal">OK!</button></>}
                        </div>
                      </div>
                    </div>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
