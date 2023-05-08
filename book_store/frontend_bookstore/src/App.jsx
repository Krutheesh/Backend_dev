import React from 'react'
import Books from './pages/Books'
import Addbook from './pages/Addbook'
import Header from "./pages/Header"
import PageNotFound from './pages/PageNotFound'
import About from './pages/About'
import Book from './pages/Book'
import toast, { Toaster } from 'react-hot-toast';
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<Header/>,
    children:[
      {
        path:'/',
        element: <Books/>
      },
      {
        path:'/addbook',
        element: <Addbook/>
      },
      {
        path:'/about',
        element: <About/>
      },{
        path:'/:id',
        element:<Book/>
      }
    ]
  },
  {
    path: "*",
    element: <PageNotFound/>
  }
])
function App() {
  return (
    <div className=' '>
      <RouterProvider router={appRouter}/>
      <Toaster/>
    </div>
  )
}

export default App
