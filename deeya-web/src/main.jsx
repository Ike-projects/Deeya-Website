import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/Home.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import Register from './pages/Register.jsx'
import MarketPlace from './pages/MarketPlace.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import Blog from './pages/Blog.jsx'

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
        path:'/blog',
        element:<Blog/>,
      }

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
