import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Index from './pages/Index.jsx'
import Servicios from './pages/Servicios.jsx'
import Horario from './pages/Horario.jsx'
import Carrito from './pages/Carrito.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
       index: true,
       element: <Index /> 
      },
      {
        path: '/servicios',
        element: <Servicios />
      },
      {
        path: '/horario',
        element: <Horario />
      },
      {
        path: '/carrito',
        element: <Carrito />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
