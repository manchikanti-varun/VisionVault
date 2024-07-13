import React from "react";
import './Navbar.css';
import navlog from '../../../../assets/logo.svg';
import navProfile from '../../../../assets/nav-profile.svg';
import dropDown from '../../../../assets/nav_dropdown.svg';

const Navbar = () => {
    return (
        <div className="navbar">
            <img src={navlog} alt="Logo" className="nav-logo" />
            <div className="nav-icons">
                <p className="nav-text">Admin</p>
                <img src={navProfile} alt="Profile" className="nav-profile"/>
                <img src={dropDown} alt="Dropdown" className="nav-dropdown"/>
            </div>
        </div>
    );
}

export default Navbar;
