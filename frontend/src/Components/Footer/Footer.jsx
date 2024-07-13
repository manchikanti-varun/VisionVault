import React from "react";
import { Link } from "react-router-dom";
import './Footer.css';
import footer_logo from '../asserts-varun/logo_big.png';
import instagram_logo from '../asserts-varun/instagram_icon.png';
import pintester_logo from '../asserts-varun/pintester_icon.png';
import whatsapp_logo from '../asserts-varun/whatsapp_icon.png';

const Footer = () => {
    return (
        <div className="footer"> 
            <div className="footer-logo">
                <img src={footer_logo} alt="VisionVault Logo" />
                <p>VisionVault</p>
            </div>
            <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/templates">Templates</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <div className="footer-social-icons">
                <div className="footer-icons-container">
                    <img src={instagram_logo} alt="Instagram" />
                </div>
                <div className="footer-icons-container">
                    <img src={pintester_logo} alt="Pinterest" />
                </div>
                <div className="footer-icons-container">
                    <img src={whatsapp_logo} alt="WhatsApp" />
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2024 - All Right Reserved</p>
            </div>
        </div>
    );
}

export default Footer;
