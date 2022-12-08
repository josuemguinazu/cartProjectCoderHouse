export const getProductById = async (url, id) => {
  const res = await fetch(url);
  const allProducts = await res.json();
  const product = allProducts.find((product) => product.id === id);
  return product;
};
