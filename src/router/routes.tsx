import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/MainPage";
import ErrorPage from "../pages/ErrorPage";
import MenuPage from "../pages/MenuPage";
import CartPage from "../pages/CartPage";

const routes = createBrowserRouter([
    {
        path: '/', 
        element: <MainPage />,
        errorElement: <ErrorPage />, 
        children: [
            { 
                path:'menu',
                element: <MenuPage /> // Protected dashboard route
            },
            {
                path:'cart',
                element: <CartPage />
            }
            // {
            //     path: 'projects',
            //     element: <PrivateRoutes><TaskManager /></PrivateRoutes>,
            // },
            // {
            //     path: 'projects/:id',
            //     element: <PrivateRoutes><ProjectPage /></PrivateRoutes>,
            // },
            // {
            //     path: 'team',
            //     element: <PrivateRoutes><TeamPage /></PrivateRoutes>
            // },
            // { 
            //     path: 'login', // Login route
            //     element: <LoginPage /> 
            // },
        ]
    }
])

export default routes