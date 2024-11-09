import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromChildren, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Body from './Components/Body/Body'
import Login from './Components/Login/Login'
import Signup from './Components/Signup/Signup'
import Aboutus from './Components/Aboutus/Aboutus'
import Layout2 from './Layout2'
import Homepage from './Components/Home/Homepage'



const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '',
        element: <Body/>
      },
      {
        path:'login',
        element: <Login/>
      },
      {
        path:'signup',
        element: <Signup/>
      },
      {
        path:'aboutus',
        element: <Aboutus/>
      }
    ]
  },
  {
    path: 'home',
    element:<Layout2/>,
    children: [
      {
        path:'',
        element: <Homepage/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>

  </React.StrictMode>,
)
