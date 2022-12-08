import ListGroup from 'react-bootstrap/ListGroup';
import CartCounter from './CartCounter';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../services/getProductById';

const ItemDetailContainer = () => {
  const stock = 12;

  const { id } = useParams();
  const [prodSelect, setProdSelect] = useState({});
  const initProd = async () => {
    const product = await getProductById('../../json/products.json', id);
    setProdSelect(product);
  };

  useEffect(() => {
    initProd();
  }, []);

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
            <ListGroup.Item>{<CartCounter initial={1} stock={stock} />}</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link className='divBtn'>
              <Link
                onClick={() => {
                  alert(`Felicitaciones, se agregó ${prodSelect.nombre} al carrito correctamente`);
                }}
                id='buyBtn'
                className='btnLink'
                to={`/products/detail/${id}`}
              >
                Comprar
              </Link>
            </Card.Link>
          </Card.Body>
        </div>
      </Card>
    </>
  );
};

export default ItemDetailContainer;
