import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({ prod, id }) => {
  return (
    <>
      <Card key={id} style={{ width: '18rem' }}>
        <Card.Img variant='top' src={prod.img} />
        <Card.Body>
          <div className='cardBody'>
            <Card.Title>{prod.nombre}</Card.Title>
            <Card.Text>${prod.precio}.-</Card.Text>
            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
            <Link className='btnLink' to={`/products/detail/${id}`}>
              Ver Producto
            </Link>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default Item;
