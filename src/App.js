import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './Pages/Service';
import PromoProducts from './Pages/Promo';
import Home from './Pages/Home';
import Login from "./Pages/Login";
import RegisterForm from "./Pages/Register";
import EnterEmail from "./Pages/EnterEmail";
import ContactPage from './Pages/Contact';
import Cart from './Pages/Cart';
import Product from './Pages/Product';
import { CartProvider } from './Contexts/CartContext';
import ProductCate from './Pages/ProductCate';

function App() {
  return (
    <CartProvider>
    <Router>
      <div>

        {/* Header outside Routes */}
        {/* Defining routes inside the Router */}
       
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
            <Route path="/promo-product" element={<PromoProducts />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/resetemail" element={<EnterEmail />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product" element={<Product />} />
            <Route path="/productpage" element={<ProductCate/>} />
            

        </Routes>
   
        {/* Footer outside Routes */}
       
      </div>
    </Router>
    </CartProvider>
  );
}

export default App;
