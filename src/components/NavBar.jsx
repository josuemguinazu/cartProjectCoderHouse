import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import logo from '../logos/logoU.png';

function NavBar() {
  return (
    <div>
      <Navbar className='NavBar' bg='light' expand='lg'>
        <Container className='leftSide'>
          {/* //logo imagen uniformes */}
          <Navbar.Brand>
            <img src={logo} alt='Logo Uniformes' width='22' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link>
                <Link className='link' to={'/'}>
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className='link' to={'/nosotros'}>
                  Nosotros
                </Link>
              </Nav.Link>{' '}
              {/* className='link' */}
              <Nav.Link>
                <Link className='link' to={'/products'}>
                  Productos
                </Link>
              </Nav.Link>
              <NavDropdown title='Categorías' id='basic-nav-dropdown0'>
                <NavDropdown.Item id='dropDown'>
                  <Link className='link' to={'/admin'}>
                    Administrativos
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item id='dropDown'>
                  <Link className='link' to={'/sanid'}>
                    Sanidad
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <div className='rightSide'>
          <CartWidget />
        </div>
      </Navbar>
    </div>
  );
}

export default NavBar;
