
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import Swiper styles
import 'swiper/css';
import './index.css'
import App from './App.jsx'
import  { router } from './Router.jsx';
import { RouterProvider } from 'react-router';





createRoot(document.getElementById('root')).render(
  
  <RouterProvider router={router}>
    <App />
  </RouterProvider>

)
