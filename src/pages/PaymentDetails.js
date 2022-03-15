// import React from 'react';
import Layout from '../layouts/Layout';
import '../assets/scss/paymentdetail.scss';
import defaultImage from '../assets/images/default-image.jpg';
import { FaIdCard, FaTruckMoving } from 'react-icons/fa';
import { AiFillBank } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addHistory } from '../redux/actions/addHistory';
import { addProductHistory } from '../redux/actions/addProductHistory';

export default function PaymentDetails () {
  const { addCharts, paymentCharts, dataChart, addHistory: dataHistory } = useSelector(state => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [totalPrc, setTotalPrc] = useState(0);

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

  const handleConfirm = (e) => {
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
    const deliveryMethodId = 1;
    const paymentMethodId = 1;
    dispatch(addHistory(tokenRes, deliveryTime, Number(subTotal), Number(total), reservationTime, shippingCost, taxtId, deliveryMethodId, paymentMethodId));
    // addCharts.results.map((data, index) => {
    //   return dispatch(addProductHistory(tokenRes, dataHistory.results.id, data.idProduct, data.idSize, data.totalItem));
    // });
    console.log('test', dataHistory);
    // navigate('/histories');
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
                  {paymentCharts.results.map((data, index) => {
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
                  })}
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
                    <textarea className='w-100'>Km 5 refinery road oppsite republic road, effurun, Jakarta</textarea>
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
                      <input type='radio' className='' id='card' value='card' />
                      <label className='fs-4'><span className='payment-list bg-primary px-2 py-1 mx-3' defaultChecked><FaIdCard/></span> Card</label>
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
                <button onClick={handleConfirm} className='btn btn-secondary fw-bold w-100 py-4 mt-5'>Confirm and Pay</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
