import React, { Component } from 'react'
import { createBrowserRouter } from 'react-router'
import NotFound from '../pages/NotFound/NotFound'
import Root from '../layouts/Root/Root'
import Home from '../pages/Home/Home'

const AppRouter = createBrowserRouter([
    {
        path: '/',
        errorElement: <NotFound />,
        Component: Root,
        children: [
            {
                index: true,
                Component: Home
            }
        ]
    }
])

export default AppRouter