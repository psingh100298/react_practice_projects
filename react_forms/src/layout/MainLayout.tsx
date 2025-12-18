import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { Outlet } from "react-router-dom"

const MainLayout = () =>{
    return (
        <>
        <Navbar/>
        <main style={{minHeight: "80vh"}}>
            <Outlet/>
        </main>
        <Footer/>
        </>
    )
}

export default MainLayout;