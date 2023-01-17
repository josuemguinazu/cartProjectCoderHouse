import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListcontainer';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Item from './components/Item';
import ItemDetailContainer from './components/ItemDetailContainer';
import { Admin } from './components/Admin';
import { Sanid } from './components/Sanid';
import { AboutUs } from './components/AboutUs';
import { CartContextProvider } from './components/Context/CartContext';
import { UserContextProvider } from './components/Context/UserContext';
import Cart from './components/Cart';
import { CheckOut } from './components/CheckOut';
import { FinalCheckOut } from './components/FinalCheckOut';

function App() {
  return (
    <div className='App'>
      <CartContextProvider>
        <UserContextProvider>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/products' element={<ItemListContainer />} />
              <Route path='/products/detail/:id' element={<ItemDetailContainer />} />
              <Route path='/admin' element={<Admin />} />
              <Route path='/sanid' element={<Sanid />} />
              <Route path='/nosotros' element={<AboutUs />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/checkout' element={<CheckOut />} />
              <Route path='/finalcheckout' element={<FinalCheckOut />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </UserContextProvider>
      </CartContextProvider>
    </div>
  );
}

export default App;
