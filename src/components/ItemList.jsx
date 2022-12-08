import Item from './Item';

const ItemList = ({ allProducts }) => {
  return (
    <>
      <div className='cards'>
        {allProducts.map((prod) => {
          return <Item prod={prod} id={prod.id} />;
        })}
      </div>
    </>
  );
};

export default ItemList;
