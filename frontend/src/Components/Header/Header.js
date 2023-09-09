import React from 'react';
import Logo from '@/Assets/Images/Logo.svg';
import './Header.css';
import HorizontalNav from '@/Components/HorizontalNav/HorizontalNav.js';

const Header = () => {
    return (
        <header>
            <div className='logo_header'>
                <img src={Logo} alt='logo entreprise'></img>
                <span>Sportsee</span>
            </div>
            {/* Render both horizontal and vertical navigation */}
            <div className="horizontal-nav-container">
                <HorizontalNav />
            </div>
        </header>
    );

};

export default Header