import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { FiTrash2 } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import http from '../helpers/http';

export default function BDHistoryItem ({ imgProduct, index, productName, price, deliveryStatus, idHistory, trigger }) {
  const { auth } = useSelector(state => state);
  const { token } = auth.results;
  const [showDelete, setShowDelete] = useState(false);
  const [loading, setLoading] = useState(false);

  const clicHandler = (e) => {
    const el = e.target;

    if (el.classList.contains('bd-history-item')) {
      setShowDelete(!showDelete);
    }
  };

  const onDelete = async (id) => {
    setShowDelete(false);
    const confirm = await Swal.fire({
      title: 'Are you sure?',
      text: 'You won`t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    });

    if (confirm.isConfirmed) {
      setLoading(true);
      const { data } = await http(token).delete(`/histories/${idHistory}`);
      setLoading(false);
      trigger();
      const { message, success } = data;

      if (success) {
        Swal.fire(
          'Deleted!',
          message,
          'success'
        );
      }
    }
  };

  return (
    <div className='bd-history-item col-12 col-md-6 col-lg-4 position-relative' onClick={clicHandler}>
      <div style={{ cursor: 'pointer' }} className='bd-history-item card d-flex flex-row  p-3 p-xl-2 p-xxl-4'>
        <div className='img-product' style={{ backgroundImage: `url(${imgProduct})` }}></div>
        {
          loading
            ? (
            <Spinner animation='border' variant='secondary' className='mx-auto justify-self-center align-self-center spinner-border text-secondary' />
              )
            : (
            <div className='bd-history-item history-text ps-3'>
              <h4 className='bd-history-item' >{productName}</h4>
              <div className='bd-history-item'>IDR {price}</div>
              <div className='bd-history-item'>{Number(deliveryStatus) ? 'Delivered' : 'Not delivered' }</div>
            </div>
              )
        }
      </div>
      <div id={`number${index}`} className={`bd-history-item position-absolute delete-option d-${!showDelete ? 'none' : 'block'}`}>
        <button onClick={onDelete} className='bd-history-item btn-delete bg-secondary'><FiTrash2/></button>
        <button className='bd-history-item btn-delete bg-primary ms-2 fw-bold'>x</button>
      </div>
    </div>
  );
}
