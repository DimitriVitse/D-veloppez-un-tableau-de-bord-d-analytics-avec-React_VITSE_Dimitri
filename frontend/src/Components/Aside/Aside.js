import React from 'react';
import VerticalNav from '@/Components/VerticalNav/VerticalNav.js'
import './Aside.css';
const Aside = () => {


    return (
        <div className='vertical-nav-container'>
            <VerticalNav></VerticalNav>
            <p>Copyright, SportSee 2020</p>
        </div>
    )
}

export default Aside