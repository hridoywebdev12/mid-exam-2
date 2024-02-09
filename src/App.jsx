
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Main from './layout/Main'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Servise from './components/Servise/Servise'

import Faq from './components/Faq/Faq'
import Login from './components/Login/Login'
import Ragistration from './components/Ragistration/Ragistration'

function App() {
 
const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      },
      {
        path:'service',
        element: <Servise></Servise>
      },
      {
        path:'faq',
        element:<Faq></Faq>
      },
      {
        path:'/login',
        element:<Login></Login> 
      },
      {
        path:'/ragistration',
        element:<Ragistration></Ragistration>
      }
    ]
  }
])
  return (

   <div>
  
   <RouterProvider router={router}></RouterProvider>
   </div>
  )
}

export default App
