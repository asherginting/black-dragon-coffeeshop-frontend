/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import '../assets/scss/historieslist.scss';
import Layout from '../layouts/Layout';
import imgProduct from '../assets/images/product.jpg';
import { FiTrash2 } from 'react-icons/fi';
import BDHistoryItem from '../components/BDHistoryItem';
import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';
import http from '../helpers/http';
import { priceFormat } from '../helpers/stringFormatter';

export default function HistoriesList () {
  const { auth } = useSelector(state => state);
  const [histories, setHistories] = useState([]);

  useEffect(() => {
    if (histories.length === 0) {
      if (auth.results.token) {
        getHistories();
      }
    }
  }, [auth, histories]);

  const getHistories = async () => {
    try {
      const results = await http(auth.results.token).get('/histories?limit=15&page=1');
      const { data } = results;
      setHistories(data.result);
    } catch (error) {
      console.error(error.response);
      Swal.fire({
        title: 'Oops...',
        text: error.response.data.message,
        icon: 'error'
      });
    }
  };

  const setTrigger = () => {
    setHistories([]);
  };

  return (
    <Layout>
      <section className='histories-list-page'>
        <div className='opacity'>
          <div className='container'>
            <div className='text-center text-white head-text'>
              <h1>Let`s see what you have bought!</h1>
              <span>Long press to delete item</span>
            </div>
            <div className='row g-4 data-histories'>
              {
                histories.length < 1 && (
                  <div className='col-12 text-center'>
                    <h3 className='text-cream' >You don`t have any history yet</h3>
                  </div>
                )
              }
              {histories.length > 0 && histories.map((data, index) => {
                return (
                <BDHistoryItem
                  onClick={(e) => console.log(e)}
                  key={data.id}
                  idHistory={data.id}
                  productName={data.name || 'Untitled product'}
                  price={priceFormat(data.total)}
                  deliveryStatus={data.deliveryStatus}
                  imgProduct={ data.image || imgProduct}
                  trigger={setTrigger}
                />
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
