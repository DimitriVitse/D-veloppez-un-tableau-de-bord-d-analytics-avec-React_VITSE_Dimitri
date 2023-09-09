// VerticalNav.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import Haltere from '@/Assets/Images/Haltère.svg';
import Meditation from '@/Assets/Images/Meditation.svg';
import Nage from '@/Assets/Images/Nage.svg';
import Velo from '@/Assets/Images/Vélo.svg';


const VerticalNav = () => {
    return (
        <nav className="vertical-nav">
            <ul>
                <li>
                    <NavLink to="/">
                        <img src={Meditation} alt='Mediation'></img>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/" >
                        <img src={Nage} alt='Nage'></img>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/" >
                        <img src={Velo} alt='Velo'></img>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/" >
                        <img src={Haltere} alt='Haltere'></img>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default VerticalNav;
