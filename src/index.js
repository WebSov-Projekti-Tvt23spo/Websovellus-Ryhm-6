import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './screens/Home';
import './index.css'
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import Group from './screens/Group';

const router = createBrowserRouter([
    {
        path: '/signin',
        element: <SignIn />
    },
    {
        path: '/signup',
        element: <SignUp />
    },
    {
        path: '/group',
        element: <Group />
    },
    {
        path: '/',
        element: <Home />
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <RouterProvider router = {router} />
    </React.StrictMode>
);
