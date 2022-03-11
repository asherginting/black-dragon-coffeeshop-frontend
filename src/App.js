
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ForgotPage from './pages/forgotPage';
import InputProduct from './pages/InputProduct';
import InputPromo from './pages/InputPromo';
import Login from './pages/Login';
import ProductList from './pages/ProductList';
import Signup from './pages/Signup';

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element ={<Login />}/>
        <Route path='/signup' element ={<Signup/>}/>
        <Route path='/forgot' element ={<ForgotPage/>}/>
        <Route path='/products/add' element ={<InputProduct />}/>
        <Route path='/products' element ={<ProductList />}/>
        <Route path='/promos/add' element ={<InputPromo />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
