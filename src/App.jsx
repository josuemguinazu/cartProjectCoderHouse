import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListcontainer';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Item from './components/Item';
import ItemDetailContainer from './components/ItemDetailContainer';
import { Admin } from './components/Admin';
import { Sanid } from './components/Sanid';
import { AboutUs } from './components/AboutUs';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<ItemListContainer />} />
          <Route path='/products/detail/:id' element={<ItemDetailContainer />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/sanid' element={<Sanid />} />
          <Route path='/nosotros' element={<AboutUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
