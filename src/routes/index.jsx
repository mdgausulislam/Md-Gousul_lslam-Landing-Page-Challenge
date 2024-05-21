import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import HomePage from '../Pages/HomePage/HomePage'
import Login from '../Pages/Login/Login'
import Cart from '../Pages/Cart/Cart'
import About from '../Pages/About/About'
import Product from '../Components/Product/Product'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <HomePage />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "cart",
                element: <Cart />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "products",
                element: <Product />
            },
        ]
    }
])


export default router