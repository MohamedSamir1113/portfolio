import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from "./components/MainLayout/MainLayout"
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Sidebar from "./components/Sidebar/Sidebar"
function App() {
  const router = createBrowserRouter([{
    path: '/', element: <MainLayout />,
    children: [
      { index: true, element: <Home /> }
    ]
  }])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
