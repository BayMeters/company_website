import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/Layout.js';
import ProductSearch from '../components/ProductQuery.js';
import ProductCard from '../components/ProductCard.js';
import Breadcrumbs from '../components/Breadcrumbs.js';

const ProductCategoryPage = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchedProducts = ProductSearch({ type: category });
    setProducts(fetchedProducts);
  }, [category]);

  return (
    <Layout>
      <div className="container mx-auto px-10 lg:px-24 py-8 pb-16">
        <Breadcrumbs />
        <h1 className="text-6xl font-anek font-medium text-green-50 mb-8">{category} Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProductCategoryPage;