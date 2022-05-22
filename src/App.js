import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ForgotPage from './pages/ForgotPage';
import ProfilePage from './pages/profilePage';
import InputProduct from './pages/InputProduct';
import InputPromo from './pages/InputPromo';
import Login from './pages/Login';
import ProductList from './pages/ProductList';
import Signup from './pages/Signup';
import ProductDetails from './pages/ProductDetails';
import Home from './pages/Home';
import HomeAdmin from './pages/HomeAdmin';
import EditPromoAdmin from './pages/EditPromoAdmin';
import HistoriesList from './pages/HistoriesList';
import ChatUser from './pages/ChatUser';
import PaymentDetails from './pages/PaymentDetails';
import EditSaveProduct from './pages/EditSaveProduct';
import DashboardAdmin from './pages/DashboardAdmin';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUser } from './redux/actions/auth';

import { PublicRoute, PrivateRoute } from './components/CustomRoute';
import { getProductCategories } from './redux/actions/productCategories';
import { products } from './redux/actions/products';

function App () {
  const { auth, productCategories } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    const user = JSON.parse(window.localStorage.getItem('user'));
    if (user) {
      dispatch({
        type: 'AUTH_LOGIN_FULFILLED',
        payload: {
          data: {
            result: { ...user }
          }
        }
      });
      dispatch(getUser(user.token, auth.results.id));
    }
  }, [dispatch, auth.results.id]);

  useEffect(() => {
    dispatch(getProductCategories());
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <PublicRoute page={<Home />} /> }/>
        <Route path='/admin' element={<HomeAdmin/>}/>
        <Route path='/dashboardadmin' element={<DashboardAdmin/>}/>

        <Route path='/login' element={ <PublicRoute restricted={true} page={<Login />} /> }/>
        <Route path='/signup' element={ <PublicRoute restricted={true} page={<Signup />} /> }/>
        <Route path='/forgot' element={ <PublicRoute restricted={true} page={<ForgotPage />} /> }/>

        <Route path='/products' element ={<ProductList />}/>
        <Route path='/products/add' element ={<InputProduct />}/>
        <Route path='/products/:id' element ={<ProductDetails />}/>
        <Route path='/products/edit' element ={<EditSaveProduct />} />

        <Route path='/profile' element={ <PrivateRoute restricted={true} page={<ProfilePage />} /> }/>

        <Route path='/promo/add' element ={<InputPromo />}/>
        <Route path='/promo/edit' element={<EditPromoAdmin/>}/>

        <Route path='/histories' element ={<HistoriesList />}/>
        <Route path='/chat' element={<ChatUser/>}/>
        <Route path='/payment' element={<PaymentDetails />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
