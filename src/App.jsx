import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import ItemListContainer from './components/ItemListcontainer';
import Form from './components/Form';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <ItemListContainer greeting={'Bienvenidos a Uniformes Empresariales'} />
      <Hero />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
