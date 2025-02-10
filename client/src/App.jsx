import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import Header from './components/Header'

import Home from './pages/home'
import Layout from './pages/Layout'
import Profile from './pages/Profile'
import Message from './pages/Message'
import Find from './pages/Find'
import Videos from './pages/Videos'
import Postpage from './pages/Postpage'


function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: 'profile',
          element: <Profile />,
          children: [
            {
              path: 'posts',
              element:<Postpage/>
            }
          ]
        },
        {
          path:'/find',
          element:<Find/>
        },
        {
          path:'',
          element:<Home/>
        },
        {
          path:'/videos',
          element:<Videos/>
        },
        {
          path:'/message',
          element:<Message/>
        },
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
