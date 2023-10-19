import ListGroup from 'react-bootstrap/ListGroup';
import CartCounter from './CartCounter';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../services/getProductById';
import { CartContext } from './Context/CartContext';
import { addCartProduct } from '../Redux/slices/Cart/cartSlice';
import { useDispatch } from 'react-redux';

const ItemDetailContainer = () => {
  const { addItem } = useContext(CartContext);
  const dispatch = useDispatch();

  const [prodSelect, setProdSelect] = useState({});
  const [sold, setSold] = useState(false);
  const [qty, setQty] = useState(0);
  const { id } = useParams();

  const initProd = async () => {
    const product = await getProductById('../../json/products.json', id);
    setProdSelect(product);
  };

  const addToCart = () => {
    addItem(prodSelect, qty);
    dispatch(addCartProduct({ prod: prodSelect, qty }));
    setSold(true);
  };
  useEffect(() => {
    initProd();
  });

  return (
    <>
      <Card className='card' id='itemCard' key={id}>
        <div>
          <Card.Img id='itemImg' variant='top' src={`../.${prodSelect.img}`} />
        </div>
        <div id='itemCardText'>
          <Card.Body>
            <Card.Title id='itemName'>{prodSelect.nombre}</Card.Title>
            <Card.Text id='itemText'>
              <ul>
                <li>Tela de primera calidad</li>
                <li>Stock permanente</li>
                <li>Amplia curva de talles</li>
                <li>Servicio posventa</li>
              </ul>
            </Card.Text>
          </Card.Body>
          <ListGroup className='list-group-flush'>
            <ListGroup.Item id='tela'>Tela: {prodSelect.tela}</ListGroup.Item>
            <ListGroup.Item id='precio'>${prodSelect.precio}.-</ListGroup.Item>
            <ListGroup.Item>
              <CartCounter qty={qty} setQty={setQty} stock={prodSelect.stock} />
            </ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link className='divBtn'>
              <Link>
                {sold ? (
                  <Link to={'/cart'} className='btnLink'>
                    Terminar compra
                  </Link>
                ) : (
                  <Link onClick={addToCart} className='btnLink'>
                    Agregar al carrito
                  </Link>
                )}
              </Link>
            </Card.Link>
          </Card.Body>
        </div>
      </Card>
    </>
  );
};

export default ItemDetailContainer;
