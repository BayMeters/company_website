import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your page components
import Mainpage from './pages/Mainpage.js';
import ProductPage from './pages/Productpage.js';
import Singleproductpage from './pages/Singleproductpage.js';
import Aboutpage from './pages/About.js';
// import NotFound from './pages/NotFound';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/product" element={<Singleproductpage />} />
        <Route path="/about" element={<Aboutpage />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
};

export default App;