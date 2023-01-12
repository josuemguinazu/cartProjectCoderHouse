import Item from './Item';

const ItemList = ({ allProducts }) => {
  return (
    <>
      <div className='cards'>
        {allProducts.map((prod) => {
          return <Item key={prod.id} prod={prod} id={prod.id} />;
        })}
      </div>
    </>
  );
};

export default ItemList;
