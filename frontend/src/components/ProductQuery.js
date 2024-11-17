// ProductQuery.js
import productData from '../data/productList_cleaned.json';

const ProductSearch = ({ type = '', model = '' }) => {
  return new Promise((resolve) => {
    // Simulate a small network delay (optional, you can remove setTimeout if you don't want any delay)
    // setTimeout(() => {
      let filteredResults = productData;
      
      if (type) {
        filteredResults = filteredResults.filter(product =>
          product.Type.toLowerCase().includes(type.toLowerCase())
        );
      }
      
      if (model) {
        filteredResults = filteredResults.filter(product =>
          product.Model.toLowerCase().includes(model.toLowerCase())
        );
      }
      
      console.log(filteredResults);
      resolve(filteredResults);
    // }, 100); // Small delay to prevent flash of loading state
  });
};

export default ProductSearch;