import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/Home.jsx'
import AboutPage from './pages/AboutPage.jsx'
import MarketPlace from './pages/MarketPlace.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import ContactPage from './pages/ContactPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import Register from './pages/Register.jsx'
import TandC from './pages/TandC.jsx'
import ResetPassword from './pages/ResetPassword.jsx'
import UserAccount from './pages/UserAccount.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <div>404 Not Found</div>,
    children: [
      {
        path: '/',
        element: < Home/>
      },
      {
        path:'/aboutus',
        element:<AboutPage/>,
      },
      {
        path:'/marketplace',
        element:<MarketPlace/>,
      },
      {
        path:'/marketplace/:id',
        element:<ProductDetails/>,
      },
      {
        path:'/contactus',
        element:<ContactPage/>,
      },
      {
        path:'/login',
        element:<LoginPage/>,
      },
      {
        path:'/register',
        element:<Register/>,
      },
      {
        path:'/tc',
        element:<TandC/>,
      },
      {
        path:'/reset',
        element:<ResetPassword/>,
      },
      {
        path:'/account',
        element:<UserAccount/>,
      },
      
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
