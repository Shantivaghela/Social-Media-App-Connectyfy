import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import Header from './components/Header'

import Home from './pages/Home'
import Layout from './pages/Layout'
import Profile from './pages/Profile'
import Message from './pages/Message'
import Find from './pages/Find'
import Videos from './pages/Videos'
import Postpage from './pages/Postpage'
import Chatbox from './pages/Chatbox'
import Notifications from './pages/Notifications'
import Friends from './pages/Friends'
import Login from './pages/authentications/Login'
import Forgotpass from './pages/authentications/Forgotpass'
import Editprofile from './pages/Editprofile'
import Createpost from './pages/Createpost'
import SignUp from './pages/authentications/SignUp'
import Logout from './pages/authentications/Logout'
import PasswordChange from './pages/PasswordChange'
import UserProfile from './pages/UserProfile'
import MainLoader from './components/MainLoader'
import { useAuth } from './contextAPI'
import NotFuound from './pages/NotFuound'
const API = import.meta.env.VITE_API_URL;


function App() {
  const [count, setCount] = useState(0)
  const { isLoggedIn, allposts } = useAuth();


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
              element: <Postpage />
            }
          ]
        },
        {
          path: '/find',
          element: <Find />
        },
        {
          path: '',
          element: allposts ? <Home /> : <MainLoader />
        },
        {
          path: '/videos',
          element: <Videos />
        },
        {
          path: '/message',
          element: <Message />
        },
        {
          path: '/chat/:userId',
          element: <Chatbox />
        },
        {
          path: '/notification',
          element: <Notifications />
        },
        {
          path: '/friends',
          element: <Friends />
        },
        {
          path: '/Editprofile',
          element: <Editprofile />
        },
        {
          path: '/Createpost',
          element: <Createpost />
        },
        {
          path: '/PasswordChange',
          element: <PasswordChange />
        },
        {
          path: '/userprofile/:userId',
          element: <UserProfile />
        },
      ]
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/signup',
      element: <SignUp />
    },
    {
      path: '/forgot',
      element: <Forgotpass />
    },
    {
      path: '/logout',
      element: <Logout />
    },
    {
      path:'*',
      element:<NotFuound/>
    }


  ])

  return (
    <>


      <RouterProvider router={router} />


    </>
  )
}

export default App
