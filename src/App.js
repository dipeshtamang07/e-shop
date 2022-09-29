import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Cart from './pages/Cart/Cart';
import ProductsGrid from './components/ProductsGrid/ProductsGrid';
import CartContextProvider from './contexts/CartContext';

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/profile' element={<Profile />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/product-details/:id' element={<ProductDetails />}/>
          <Route path='/products/category/:category' element={<ProductsGrid/>} />
        </Routes>
      </CartContextProvider>
    </div>
  );
}

export default App;
