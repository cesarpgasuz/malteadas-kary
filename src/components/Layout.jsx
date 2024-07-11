import { Outlet } from "react-router-dom"
import { OrdenProvider } from "../context/OrdenProvider";
import { Toaster } from "react-hot-toast";
import Navbar from "./Navbar";
import ScrollToTops from "./ScrollToTops";


const Layout = () => {
    return (
        <OrdenProvider>
            <ScrollToTops />
            <Navbar />
            <Toaster />
            <Outlet />
        </OrdenProvider>
    )
}
export default Layout