import React, { Component } from 'react'
import { createBrowserRouter } from 'react-router'
import NotFound from '../pages/NotFound/NotFound'
import Root from '../layouts/Root/Root'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import BecomeAnExpert from '../pages/BecomeAnExpert/BecomeAnExpert'

const AppRouter = createBrowserRouter([
    {
        path: '/',
        errorElement: <NotFound />,
        Component: Root,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: 'login',
                Component: Login
            },
            {
                path: 'become-an-expert',
                Component: BecomeAnExpert
            }
        ]
    }
])

export default AppRouter