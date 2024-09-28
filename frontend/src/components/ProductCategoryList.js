import { useState, useEffect } from 'react';
import productData from '../data/productList_cleaned.json';

const ProductList = () => {
  const [industries, setIndustries] = useState([]);

  useEffect(() => {
    const uniqueIndustries = [...new Set(productData.map(product => product.Type))];
    setIndustries(uniqueIndustries);
  }, []);

  return industries;
};

export default ProductList;