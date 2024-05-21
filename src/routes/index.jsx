import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import HomePage from '../Pages/HomePage/HomePage'
import Login from '../Pages/Login/Login'

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
        ]
    }
])


export default router