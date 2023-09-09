import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from '@/Layout/Layout.js';
import { Dashboard } from './Index.js';

const PublicRouter = () => {

    return (

        <Routes>
            <Route element={<Layout />}>
                <Route path="" element={<Navigate to="/Dashboard" />} />
                <Route path="/Dashboard" element={<Dashboard />} />
            </Route>
        </Routes>

    );
};

export default PublicRouter;
