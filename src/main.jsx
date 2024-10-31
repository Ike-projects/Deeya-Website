import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/Home.jsx'
import AboutPage from './pages/AboutPage.jsx'
import AboutUs from './pages/AboutUs.jsx'
import MarketPlace from './pages/MarketPlace.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import Blog from './pages/Blog.jsx'
import BlogDetails from './pages/BlogDetails.jsx'

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
        path:'/blog',
        element:<Blog/>
      },
      {
        path:'/blog/:id',
        element:<BlogDetails/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
