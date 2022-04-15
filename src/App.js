import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/login/Login';
import Header from './components/header/Header';
import Products from './components/products/Products';
import Orders from './components/orders/Orders';
import Register from './components/register/Register';
import RequireAuth from './components/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/products' element={<RequireAuth><Products></Products></RequireAuth>}></Route>
        <Route path='/orders' element={<RequireAuth><Orders></Orders></RequireAuth>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
