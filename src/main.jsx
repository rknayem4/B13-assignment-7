import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { router } from './Router/Router'
import Loading from './Components/UI/Loading'
import AppsProvider from './Context/AppsProvider'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppsProvider>
      <RouterProvider router={router}></RouterProvider>
    </AppsProvider>
    
  </StrictMode>,
)
