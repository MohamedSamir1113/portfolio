import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from "./components/MainLayout/MainLayout"
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Sidebar from "./components/Sidebar/Sidebar"
import Skills from "./components/Skills/Skills"
import Experience from "./components/Experience/Experience"
function App() {
  const router = createBrowserRouter([{
    path: '/', element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About/> },
      { path: "skills", element: <Skills/> },
      { path: "experience", element: <Experience/> }
    ]
  }])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
