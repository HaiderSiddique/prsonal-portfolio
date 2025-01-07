import './App.css'
import { useState, useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Sidebar from './components/Sidebar'
import Photo from './components/Photo'
import Contact from './components/Contact'
import loading from "../src/components/loading.gif"
import Navbar from './components/Navbar'

function App() {
  const[isLoading , setIsLoading] = useState(true);

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setIsLoading(false);
        }
    ,3000);

    return () => clearTimeout(timer);

    },[]);

    if (isLoading){
        return(
            <div className="h-screen flex items-center justify-center">
                <img className="w-24" src={loading} alt="" />
            </div>
        );
    }
  const router = createBrowserRouter ([
    {
      path: "/",
      element: <> <Navbar/> <Home/> <About/> <Photo/> <Contact/> </>
      
    },
    {
      path: "/About",
      element: <> <Navbar/> <About/> <Photo/> <Contact/> </>
    },
    {
      path: "/Photo",
      element: <> <Navbar/> <Photo/>  <Contact/> </>
    },
    
    {
      path: "/Contact",
      element: <> <Navbar/> <Contact/> </>
    }
    
  ])
  
  return (
    <>
    <Sidebar/>
    <RouterProvider router={router} />
    </>
  )
}

export default App;
