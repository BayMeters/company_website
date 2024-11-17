import productData from '../data/productList_cleaned.json';

const ProductList = () => {
  // Since this is just data transformation, we can do it synchronously
  const uniqueIndustries = [...new Set(productData.map(product => product.Type))];
  return uniqueIndustries;
};

export default ProductList;