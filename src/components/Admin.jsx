import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { getProductByCategory } from '../services/getProductsByCategory';

export const Admin = () => {
  const { id } = useParams();

  const [category, setCategory] = useState([]);

  const initCategory = async () => {
    const categoria = await getProductByCategory('../../json/products.json');
    setCategory(categoria);
  };

  useEffect(() => {
    initCategory();
  }, []);

  return (
    <>
      <div className='cardCategory'>
        {category.map((el) => {
          return (
            <Card key={id} style={{ width: '18rem' }}>
              <Card.Img variant='top' src={el.img} />
              <Card.Body>
                <div className='cardBody'>
                  <Card.Title>{el.nombre}</Card.Title>
                  <Card.Text>${el.precio}.-</Card.Text>
                  <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                  <Link className='btnLink' to={`/products/detail/${el.id}`}>
                    Ver Producto
                  </Link>
                </div>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </>
  );
};
