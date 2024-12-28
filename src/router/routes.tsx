import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/MainPage";
import ErrorPage from "../pages/ErrorPage";
import MenuPage from "../pages/MenuPage";
import CheckoutPage from "../pages/CheckoutPage";
import LoginPage from "../pages/LoginPage";
import About from "../pages/About";
import TablesPage from "../pages/TablesPage";
import KitchenPage from "../pages/KitchenPage";
import DashboardPage from "../pages/DashboardPage";
import DishesPage from "../pages/DishesPage";
// import SignupPage from "../pages/SignupPage";
import OrderSuccesspage from "../pages/OrderSuccesspage";
import PrivateRoutes from "../components/auth/PrivateRoutes";
import LandingPage from "../pages/LandingPage";
import OrderPage from "../pages/OrderPage";
import CareersPage from "../pages/CareersPage";
import LegalPage from "../pages/LegalPage";
import DocumentsPage from "../pages/DocumentsPage";

const routes = createBrowserRouter([
    {
        path: '/', 
        element: <MainPage />,
        errorElement: <ErrorPage />, 
        children: [
            {
                path:'/',
                element: <LandingPage />
            },
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
                path: 'careers', 
                element: <CareersPage /> 
            },
            {
                path: 'legal',
                element: <LegalPage />
            },
            { 
                path: 'login', 
                element: <LoginPage /> 
            },
            // {
            //     path: 'signup', 
            //     element: <SignupPage /> 
            // },
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
                path: 'sales',
                element: <PrivateRoutes><DashboardPage /></PrivateRoutes>
            },
            {
                path: 'orders',
                element: <PrivateRoutes><OrderPage /></PrivateRoutes>
            },
            {
                path: 'success',
                element: <OrderSuccesspage />
            },
            {
                path: 'documents',
                element: <DocumentsPage />
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