import { Outlet, Link } from "react-router-dom"
import Header from "./Header"
import { OrdenProvider } from "../context/OrdenProvider";
import { Toaster } from "react-hot-toast";
import Navbar from "./Navbar";


const Layout = () => {
  return (
    <OrdenProvider>
        <Navbar />
    <Toaster />

    
    <Outlet />
    </OrdenProvider>
    
  )
}
export default Layout