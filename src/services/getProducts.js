export const getProducts = async () => {
  const res = await fetch('./json/products.json');
  const allProducts = await res.json();
  return allProducts;
};
