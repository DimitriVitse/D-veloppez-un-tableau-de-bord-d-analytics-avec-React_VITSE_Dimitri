// HorizontalNav.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './HorizontalNav.css';

const HorizontalNav = () => {
    return (
        <nav className="horizontal-nav">
            <ul>
                <li>
                    <NavLink to="/" >
                        Accueil
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" >
                        Profil
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" >
                        Réglage
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" >
                        Communauté
                    </NavLink>
                </li>
                {/* Add more horizontal navigation links as needed */}
            </ul>
        </nav>
    );
};

export default HorizontalNav;
