// import React from 'react';
import '../assets/css/product-list.css';
import qs from 'qs';
import Layout from '../layouts/Layout';
import mother from '../assets/images/mother.png';
import father from '../assets/images/father.png';
import grandFather from '../assets/images/grand-father.png';
import CardPromo from '../components/CardPromo';
import CardProduct from '../components/CardProduct';
import defaultImage from '../assets/images/default-image.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { products, getNextProducts, getProductByCategory, clearProductList, getFavoriteProducts } from '../redux/actions/products';
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { priceFormat } from '../helpers/stringFormatter';
import { Spinner } from 'react-bootstrap';

export default function ProductList () {
  const dispatch = useDispatch();
  const { productList, productCategories } = useSelector(state => state);
  const navigate = useNavigate();

  const [searchParam, setSearchParam] = useSearchParams();
  const [categoryName, setCategoryName] = useState('');

  useEffect(() => {
    const queryString = Object.fromEntries([...searchParam]);

    if (productList.results.length < 1) {
      console.log('dispatch getProductByCategory');
      if (Object.keys(queryString).length > 0) {
        setCategoryName(queryString.category_name);
        if (queryString.category_name === 'favorite') {
          dispatch(getFavoriteProducts());
        } else {
          dispatch(getProductByCategory(queryString.category_name));
        }
      } else {
        dispatch(products());
      }
    }

    window.scrollTo(0, 0);

    return () => {
      dispatch(clearProductList());
    };
  }, [searchParam]);

  useEffect(() => {
    const categories = productCategories.categories;
    const categoryInQueryString = searchParam.get('category_name');
    const isExist = categories.find(category => category.name === categoryInQueryString);

    if (isExist) {
      setCategoryName(searchParam.get('category_name'));
    }
  }, [searchParam]);

  const nextPage = (e) => {
    e.preventDefault();
    const queryString = Object.fromEntries([...searchParam]);

    if (Object.keys(queryString).length > 0) {
      dispatch(getNextProducts(null, productList.pageInfo.nextPage));
    } else {
      dispatch(getNextProducts(productList.pageInfo.currentPage + 1));
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    const id = e.target.id;
    if (id) {
      const categoryName = {
        category_name: id
      };
      setSearchParam(categoryName);
      dispatch(clearProductList());
    }
  };

  return (
    <Layout>
      <div className='product-list border-top container'>
        <div className='row main-content'>
          <aside className='col-12 col-lg-4 pt-5 pe-5 border-end'>
            <div className='text-center mb-5'>
              <h3 className='text-dark'>Promo Today</h3>
              <p>Coupons will be updated every weeks. <br/>Check them out! </p>
            </div>
            <div className='card-section pt-lg-4'>
              <CardPromo picture={mother} background='secondary'>
                <div>
                  <span className='fw-bold'>HAPPY MOTHER`S DAY!</span> <br/>
                  Get one of our favorite menu for free!
                </div>
              </CardPromo>
              <CardPromo picture={father} background='primary'>
                <div>
                  <span className='fw-bold'>Get a cup of coffee for free on sunday morning</span> <br/>
                  Only at 7 to 9 AM
                </div>
              </CardPromo>
              <CardPromo picture={mother} background='secondary'>
                <div>
                  <span className='fw-bold'>HAPPY MOTHER`S DAY!</span> <br/>
                  Get one of our favorite menu for free!
                </div>
              </CardPromo>
              <CardPromo picture={grandFather} background='third'>
                <div>
                  <span className='fw-bold'>HAPPY HALLOWEEN!</span> <br/>
                  Do you like chicken wings? Get 1 free only if you buy pinky promise
                </div>
              </CardPromo>
              <div className='mt-5'>
                <button className='btn btn-primary w-100 py-4 fw-bold'>Apply Coupon</button>
              </div>
              <div className='mt-5 pt-5 terms'>
                <span className='fw-bold'>Terms and Condition</span>
                <ol className='list-group ps-3'>
                  <li>You can only apply 1 coupon per day</li>
                  <li>It only for dine in</li>
                  <li>Buy 1 get 1 only for new user</li>
                  <li>Should make member card to apply coupon</li>
                </ol>
              </div>
            </div>
          </aside>
          <section className='col-12 col-lg-8 pt-3 ps-5'>
            <div className='list-category'>
              <ul className='list-group row g-0 d-flex flex-row justify-content-between'>
                <li className='col-4 col-md-auto mt-2 mt-md-0'>
                  <a id='favorite' onClick={handleClick} className={`category text-primary cursor-pointer ${categoryName === 'favorite' ? 'focus' : ''}`}>Favorite & Promo</a>
                </li>
                <li className='col-4 col-md-auto mt-2 mt-md-0'>
                  <a id='coffee' onClick={handleClick} className={`category text-primary cursor-pointer ${categoryName === 'coffee' ? 'focus' : ''}`}>Coffee</a>
                </li>
                <li className='col-4 col-md-auto mt-2 mt-md-0'>
                  <a id='non coffee' onClick={handleClick} className={`category text-primary cursor-pointer ${categoryName === 'non coffee' ? 'focus' : ''}`}>Non Coffee</a>
                </li>
                <li className='col-4 col-md-auto mt-2 mt-md-0'>
                  <a id='foods' onClick={handleClick} className={`category text-primary cursor-pointer ${categoryName === 'foods' ? 'focus' : ''}`}>Foods</a>
                </li>
                <li className='col-4 col-md-auto mt-2 mt-md-0'>
                  <a id='add on' onClick={handleClick} className={`category text-primary cursor-pointer ${categoryName === 'add on' ? 'focus' : ''}`}>Add-on</a>
                </li>
              </ul>
            </div>
            <div className='product-list mt-5'>
              <div className='row g-5'>
                {(productList.results.length < 1 && !productList.isLoading) && (
                  <div className='col-12 text-center'>
                    <h3 className='text-choco'>No Product</h3>
                  </div>
                )}

                {
                  productList.isLoading && (
                    <div className='col-12 text-center'>
                      <Spinner animation='border' variant='primary' />
                    </div>
                  )
                }
                {productList.results.length > 0 && productList.results.map(data => {
                  const { name, price, image, id } = data;
                  const noImage = 'localhost:5000/';
                  return (
                    <CardProduct
                      onClick={() => navigate(`${id}`)}
                      // image={image === noImage ? defaultImage : `http://${image}`}
                      image={image || defaultImage}
                      name={name}
                      price={priceFormat(price)}
                      key={id}
                    />
                  );
                })}
              </div>
            </div>
            {productList.pageInfo.nextPage
              ? <div className='mt-5'>
              <button onClick={nextPage} className='btn btn-secondary w-100 py-4 fw-bold'>Next</button>
            </div>
              : <div></div>}
            <div className='mt-4'>*the price has been cutted by discount appears</div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
