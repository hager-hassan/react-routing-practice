import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'

import { RouterProvider, Navigate  , createBrowserRouter } from "react-router-dom"

import Contact from './Components/Contact/Contact.jsx'
import Home from './Components/Home/Home.jsx'
import Layout from './Components/Layout/Layout.jsx'
import About from './Components/About/About.jsx'
import PortFolio from './Components/Portfolio/PortFolio.jsx'
import NotFound from './Components/NotFound/NotFound.jsx'

function App() {

  let routes = createBrowserRouter([
  {
    path: '/', element: <Layout />,children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'portfolio', element: <PortFolio /> },
      { path: 'contact', element: <Contact /> },
      { path: '*' , element: <NotFound/>},
    ],
  },
]);


  return (
    <RouterProvider router={routes}/>
  )
}

export default App
