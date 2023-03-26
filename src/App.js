import './App.css'
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './pages/Home';
import Link from './pages/Link';
import Login from './pages/Login';
import Products from './pages/Products';
import Registration from './pages/Registration';

const App = () => {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children: [
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/products',
          element:<Products></Products>
        },
        {
          path:'/link',
          element:<Link></Link>
        },
      ]

    },
    {
      path:'/login',
      element:<Login></Login>
    },
    {
      path:'/registration',
      element:<Registration></Registration>
    },
  ])

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
