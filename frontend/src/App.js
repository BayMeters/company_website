import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your page components
import Mainpage from './pages/Mainpage.js';
import ProductCategoryPage from './pages/ProductCategory.js';
import Singleproductpage from './pages/SingleProduct.js';
import Aboutpage from './pages/About.js';
import Contactpage from './pages/Contact.js';
import Comingsoonpage from './pages/Comingsoon.js';
import Privacypage from './pages/Privacy.js';
import Productpage from './pages/Productpage.js';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/products" element={<Productpage />} />
        <Route path="/products/:category" element={<ProductCategoryPage />} />
        <Route path="/products/:category/:model" element={<Singleproductpage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/comingsoon" element={<Comingsoonpage />} />
        <Route path="/privacy" element={<Privacypage />} />
      </Routes>
    </Router>
  );
};

export default App;