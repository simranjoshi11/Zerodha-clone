import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HomePage from './Landing_page/Home/HomePage';
import Signup from './Landing_page/Signup/Signup';
import Support from './Landing_page/Support/SupportPage';
import About from './Landing_page/About/About';
import Pricing from './Landing_page/Pricing/PricingPage';
import Product from './Landing_page/Product/ProductPage';
import Navbar from './Landing_page/Navbar';
import Footer from './Landing_page/Footer';
import NotFound from './Landing_page/NotFound';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <Navbar/>
  <Routes>
    <Route path='/' element={<HomePage/>}/>
     <Route path='/Signup' element={<Signup/>}/>
       <Route path='/About' element={<About/>}/>
         <Route path='/Support' element={<Support/>}/>
          <Route path='/Product' element={<Product/>}/>
           <Route path='/Pricing' element={<Pricing/>}/>
            <Route path='*' element={<NotFound/>}/>
  </Routes>
   <Footer/>
  </BrowserRouter>
);


