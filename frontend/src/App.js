import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Template from './Pages/Template';
import Templates from './Pages/Templates';
import AboutUs from './Pages/About';
import Contact from './Pages/Contact';
import LoginSignup from './Pages/LoginSignup'; 
import Footer from './Components/Footer/Footer';

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/templates" element={<Templates />} />
                    <Route path="/aboutUs" element={<AboutUs />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/template/:templateId" element={<Template />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/login-signup" element={<LoginSignup />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
