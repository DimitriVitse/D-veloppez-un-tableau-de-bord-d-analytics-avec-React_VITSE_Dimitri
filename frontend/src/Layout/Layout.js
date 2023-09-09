import React from 'react';
import { Outlet } from 'react-router-dom';

import '@/Layout/Layout.css'

import Header from '@/Components/Header/Header.js';
import Footer from '@/Components/Footer/Footer.js';
import Aside from '@/Components/Aside/Aside';


const Layout = () => {
    return (
        <div className='layout'>

            <Header />
            <Aside />
            <main>

                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;