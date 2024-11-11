import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/MainPage";
import ErrorPage from "../pages/ErrorPage";
import MenuPage from "../pages/MenuPage";
import CheckoutPage from "../pages/CheckoutPage";
import LoginPage from "../pages/LoginPage";
import About from "../pages/About";
import CateringPage from "../pages/CateringPage";
import TablesPage from "../pages/TablesPage";

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
                path:'checkout',
                element: <CheckoutPage />
            },
            { 
                path: 'about', // Login route
                element: <About /> 
            },
            { 
                path: 'catering', // Login route
                element: <CateringPage /> 
            },
            { 
                path: 'login', // Login route
                element: <LoginPage /> 
            },
            {
                path: 'tables',
                element: <TablesPage />
            },

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

        ]
    }
])

export default routes