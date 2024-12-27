import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import Header from './components/header/Header';
import OurService from './components/ourService/OurService';
import Footer from './components/footer/footer';
import Rettier from './components/renttier/Rettier';
import AboutMain from './components/aboutUs/AboutMain';
import InvestorMain from './components/investor/InvestorMain';
import FAQs from './components/FAQs/FAQs';




function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/home' element={<Home/>} />
          <Route path="/about-us" element={<AboutMain />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/our-services' element ={<OurService />} />
          <Route path='/mavhr-llc' element = {<Rettier />}/>
          <Route path='/investor-roi' element = {<InvestorMain />} />
          <Route path='/faqs' element ={<FAQs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
