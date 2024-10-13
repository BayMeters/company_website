import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Import your page components
import Mainpage from './pages/Mainpage.js';
import ProductCategoryPage from './pages/ProductCategory.js';
import Singleproductpage from './pages/SingleProduct.js';
import Aboutpage from './pages/About.js';
import Contactpage from './pages/Contact.js';
import Comingsoonpage from './pages/Comingsoon.js';
import Privacypage from './pages/Privacy.js';
import Productpage from './pages/Productpage.js';
import Servicepage from './pages/Service.js';

const AnimatedRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    // <TransitionGroup>
    //   <CSSTransition key={location.pathname} classNames="fade" timeout={300}>
        <Routes location={location}>
          <Route path="/" element={<Mainpage />} />
          <Route path="/products" element={<Productpage />} />
          <Route path="/products/:category" element={<ProductCategoryPage />} />
          <Route path="/products/:category/:model" element={<Singleproductpage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/contact" element={<Contactpage />} />
          <Route path="/comingsoon" element={<Comingsoonpage />} />
          <Route path="/privacy" element={<Privacypage />} />
          <Route path="/service-terms" element={<Servicepage />} />
        </Routes>
    //   </CSSTransition>
    // </TransitionGroup>
  );
};

const App = () => {
  return (
    <Router>
      <div className="relative">
        <AnimatedRoutes />
      </div>
    </Router>
  );
};

export default App;
