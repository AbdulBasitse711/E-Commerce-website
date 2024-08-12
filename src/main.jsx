import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import { AuthLayout, Login } from './components/index.js'
import Loader from './pages/Loader.jsx'
import CategoriesDetailProducts from './pages/CategoriesDetailProducts.jsx'


import Signup from './pages/Signup'
import ProductDescription from './pages/ProductDescription.jsx'



const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/login",
                element: (
                    <AuthLayout authentication={false}>
                        <Login />
                    </AuthLayout>
                ),
            },
            {
                path: "/signup",
                element: (
                    <AuthLayout authentication={false}>
                        <Signup />
                    </AuthLayout>
                ),
            },
            {
                path: "/categories/:category",
                element: (
                    <CategoriesDetailProducts />
                ),
                children: [
                    {
                        path: "/categories/:category/:subcategory",
                        element: (
                            <CategoriesDetailProducts />
                        ),
                    }
                ]
            },
            {
                path: "/:product/:productname",
                element: (
                    <ProductDescription />
                ),
            },
        ],
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} fallbackElement={<Loader />} />
        </Provider>
    </React.StrictMode>,
)