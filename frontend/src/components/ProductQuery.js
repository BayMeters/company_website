import productData from '../data/productList_cleaned.json';

const ProductSearch = ({ type = '', model = '' }) => {
  return new Promise((resolve) => {
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
  });
};

export default ProductSearch;