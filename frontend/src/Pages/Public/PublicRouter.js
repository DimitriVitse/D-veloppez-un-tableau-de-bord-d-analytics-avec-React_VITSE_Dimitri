import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from '@/Layout/Layout.js';
import { Login } from './Index.js';

const PublicRouter = () => {

    return (

        <Routes>
            <Route element={<Layout />}>
                <Route path="" element={<Navigate to="/login" />} />
                <Route path="/login" element={<Login />} />
            </Route>
        </Routes>

    );
};

export default PublicRouter;