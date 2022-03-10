import ForgotPage from './pages/forgotPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element ={<ForgotPage/>}/>
      </Routes>
  </BrowserRouter>
  );
}

export default App;
