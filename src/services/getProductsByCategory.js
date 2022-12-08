export const getProductByCategory = async (url) => {
  const res = await fetch(url);
  const allProducts = await res.json();
  const product = allProducts.filter((product) => product.categoria === 'admin');
  return product;
};

export const getProductByCategoryS = async (url) => {
  const res = await fetch(url);
  const allProducts = await res.json();
  const product = allProducts.filter((product) => product.categoria === 'sanid');
  return product;
};
