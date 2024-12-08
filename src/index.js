import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './screens/Home';
import './index.css'
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import Group from './screens/Group.js';
import GroupList from './screens/GroupList.js';
import CreateGroup from './screens/CreateGroup.js';
import Individual from './screens/Individual';
import Favourites from './screens/Favourites';
import Profile from './screens/Profile';
import Timetable from './screens/Timetable';

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
        path: '/group/:groupId',
        element: <Group />
    },
    {
        path: '/groupList',
        element: <GroupList />
    },
    {
        path: '/createGroup',
        element: <CreateGroup />
    },
    {
        path: '/individual',
        element: <Individual />
    },
    {
        path: '/favourites',
        element: <Favourites />
    },
    {
        path: '/profile',
        element: <Profile />
    },
    {
        path: '/timetable',
        element: <Timetable />
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
