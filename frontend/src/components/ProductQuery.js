import productData from '../data/productList_cleaned.json';

const ProductSearch = ({ type = '', model = '' }) => {
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
    return filteredResults;
  };
  
  export default ProductSearch;