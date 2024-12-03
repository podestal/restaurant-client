import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/MainPage";
import ErrorPage from "../pages/ErrorPage";
import MenuPage from "../pages/MenuPage";
import CheckoutPage from "../pages/CheckoutPage";
import LoginPage from "../pages/LoginPage";
import About from "../pages/About";
import CateringPage from "../pages/CateringPage";
import TablesPage from "../pages/TablesPage";
import KitchenPage from "../pages/KitchenPage";
import DashboardPage from "../pages/DashboardPage";
import DishesPage from "../pages/DishesPage";
import SignupPage from "../pages/SignupPage";
import OrderSuccesspage from "../pages/OrderSuccesspage";
import PrivateRoutes from "../components/auth/PrivateRoutes";

const routes = createBrowserRouter([
    {
        path: '/', 
        element: <MainPage />,
        errorElement: <ErrorPage />, 
        children: [
            { 
                path:'menu',
                element: <MenuPage /> 
            },
            {
                path:'checkout',
                element: <CheckoutPage />
            },
            { 
                path: 'about', 
                element: <About /> 
            },
            { 
                path: 'catering', 
                element: <CateringPage /> 
            },
            { 
                path: 'login', 
                element: <LoginPage /> 
            },
            {
                path: 'signup', 
                element: <SignupPage /> 
            },
            {
                path: 'dishes',
                element: <PrivateRoutes><DishesPage /></PrivateRoutes>
            },
            {
                path: 'tables',
                element: <PrivateRoutes><TablesPage /></PrivateRoutes>
            },
            {
                path: 'kitchen',
                element: <PrivateRoutes><KitchenPage /></PrivateRoutes>
            },
            {
                path: 'dashboard',
                element: <PrivateRoutes><DashboardPage /></PrivateRoutes>
            },
            {
                path: 'success',
                element: <OrderSuccesspage />
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

        ]
    }
])

export default routes