import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './assets/Routes/Home'
import Destinations from './assets/Routes/Destinations'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    errorElement: <h1 className=' text-center font-bold'> Pagina no encontrada </h1>
  },
  {
    path: '/destinations',
    element: < Destinations />
  },  

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
