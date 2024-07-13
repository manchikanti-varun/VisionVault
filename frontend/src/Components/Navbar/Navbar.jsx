import React, { useState, useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../asserts-varun/logo.png';
import cart_icon from '../asserts-varun/cart_icon.png';
import { HomeContext } from '../../Context/HomeContext';

const Navbar = () => {
    const [menu, setMenu] = useState("Home");
    const { getTotalCartItems } = useContext(HomeContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('auth-token');
        navigate('/login-signup');
    };

    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="Logo" />
                <p>VisionVault</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => setMenu("Home")}>
                    <Link to='/' style={{ textDecoration: 'none' }}>Home</Link>
                    {menu === "Home" ? <hr /> : null}
                </li>
                <li onClick={() => setMenu("Templates")}>
                    <Link to='/templates' style={{ textDecoration: 'none' }}>Templates</Link>
                    {menu === "Templates" ? <hr /> : null}
                </li>
                <li onClick={() => setMenu("AboutUs")}>
                    <Link to='/aboutUs' style={{ textDecoration: 'none' }}>About Us</Link>
                    {menu === "AboutUs" ? <hr /> : null}
                </li>
                <li onClick={() => setMenu("Contact")}>
                    <Link to='/contact' style={{ textDecoration: 'none' }}>Contact</Link>
                    {menu === "Contact" ? <hr /> : null}
                </li>
            </ul>
            <div className="nav-login-cart">
                {localStorage.getItem('auth-token') ? (
                    <button onClick={handleLogout}>Logout</button>
                ) : (
                    <Link to='/login-signup'>
                        <button>Login</button>
                    </Link>
                )}
                <Link to='/cart'>
                    <img src={cart_icon} alt="Cart" />
                    <div className="nav-cart-count">{getTotalCartItems()}</div>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
